<?php

namespace App\Controller;

use DateTime;
use App\Entity\Tour;
use App\Entity\User;
use App\Entity\Evento;
use DateTimeImmutable;
use App\Entity\Reserva;
use App\Form\UserFormType;
use App\Service\EventoService;
use App\Service\MailerService;
use App\Entity\DetallesReserva;
use App\Repository\TourRepository;
use App\Repository\UserRepository;
use App\Repository\EventoRepository;
use App\Form\DetallesReservaFormType;
use App\Repository\ReservaRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\BlogCategoriaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ReservaController extends AbstractController
{

    private $em;

    private $rs;

    public function __construct(EntityManagerInterface $em, RequestStack $rs)
    {
        $this->em = $em;
        $this->rs = $rs;
    }

    #[Route('/reserva/{id}/{_locale}', name: 'show')]
    public function show(
        Request $request,
        EntityManagerInterface $em,
        Tour $tour,
        TourRepository $tourRepository,
        EventoService $es,
        MailerService $mailerService,
        BlogCategoriaRepository $blogCategoriaRepository,
        EventoRepository $eventoRepository, TranslatorInterface $translator
    ) {

        if (!$tour) {
            return $this->redirectToRoute('home');
        }

        //* Aqui recupero $categorias ya que el NavBar se carga en esta ruta reserva/{id}, y el link de BLOG precisa del id de la categoria

        $categorias = $blogCategoriaRepository->findAll();

        foreach($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);
        
        $locale = $request->getLocale();


        $detallesReserva = new DetallesReserva;
        $detallesReserva->setFechaEvento(new DateTime());

        $tours = $tourRepository->findAll();

        $reserva = new Reserva();

        $user = $this->getUser();

        $reserva->setUser($user)
            ->setEstado('Añadir guía')
            ->setReferencia(uniqId())
            ->addTour($tour);


        $form = $this->createForm(DetallesReservaFormType::class, $detallesReserva);
        $form->handleRequest($request);

        $cantidadAdultos = $detallesReserva->getCantidadAdultos();
        $cantidadKids = $detallesReserva->getCantidadKids();
        $precio = $tour->getPrecio();

        if ($cantidadAdultos !== null && $cantidadKids !== null) {
            $cantidad = $cantidadAdultos + $cantidadKids;
            $totalReserva = $cantidad * $precio;
        } else {
            // Manejar el caso en el que una o ambas variables sean nulas
            $totalReserva = 0; // O cualquier valor predeterminado que desees
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $detallesReserva->setId($detallesReserva->getId())
                ->setCantidad($cantidad)
                ->setTotalReserva($totalReserva);

            $fechaReserva = $detallesReserva->getFechaEvento()->format('Y-m-d');
            $fechaActual = new DateTime("now");
            $fechaActual = $fechaActual->format('Y-m-d');

            if ($fechaReserva < $fechaActual) {

                $mensaje = $translator->trans('The date of the event cannot be earlier than the current date, please modify the date of the reservation');

                $this->addFlash('danger', $mensaje);

                return $this->redirectToRoute('show', [
                    'id' => $tour->getId(), 
                    '_locale' => $locale
                ]);
            }
            
            $evento = $eventoRepository->findOneBy(['tour' => $tour, 'fecha_evento' => new DateTime($fechaReserva)]);
        if ($evento && $evento->isCerrado()) {
            $mensaje = $translator->trans('The event is closed and cannot receive further reservations');
            $this->addFlash('danger', $mensaje);
            return $this->redirectToRoute('show', ['id' => $tour->getId(), 
            '_locale' => $locale]);
        }

            $horarios = $tour->getHorarios();
            foreach ($horarios as $horario) {
                $fechaHorario = $horario->getFechaTour()->format('Y-m-d');
                // Verificar si la fecha de reserva coincide con la fecha del horario actual
                if ($fechaReserva === $fechaHorario) {
                    $tours = $horario->getTours();
                    foreach ($tours as $tour) {
                        $titulo = $tour->getTitulo();
                        if ($titulos[$titulo] = $tour->getId()) {

                            $mensaje = $translator->trans('Ups! We do not have a visit this day for this tour, please modify the booking date');

                            $this->addFlash('danger', $mensaje);
                            return $this->redirectToRoute('show', ['id' => $tour->getId(), 
                            '_locale' => $locale]);
                        }
                    }
                }
            }

            $detallesReserva->getFechaEvento($fechaReserva);

            $reserva->setDetallesReserva($detallesReserva);

            if ($detallesReserva->getCantidad() >= $tour->getStock()) {

                $mensaje = $translator->trans('Sorry! The maximum number of participants for this event has been reached');

                $this->addFlash('danger', $mensaje);

                return $this->redirectToRoute('show', [
                    'id' => $tour->getId(), 
                    '_locale' => $locale
                ]);
            }

            $evento = $this->em
                ->getRepository(Evento::class)
                ->findOneBy(['tour' => $tour, 'fecha_evento' => new DateTime($fechaReserva)]);

            if ($evento) {
                $cantidadEvento = $evento->getCantidad();
                $cantidadTotal = $cantidadEvento + $cantidad;
                $stock = $tour->getStock();
                $cantidadRestante = $stock - $cantidadEvento;

                if ($cantidadTotal >= $tour->getStock()) {

                    $mensaje = $translator->trans("We inform you that there are only " .  $cantidadRestante . " places left free for today's activity");

                    $this->addFlash('danger', $mensaje);
                    return $this->redirectToRoute('show', ['id' => $tour->getId(), 
                    '_locale' => $locale]);
                }
            }

            $em->persist($reserva);
            $em->flush();

            //* Enviar e-mail de confirmacion
            $mailerService->send(
                $reserva->getUser()->getEmail(),
                'Confirmacion de su reserva',
                'confirmation_nueva_reserva_email.html.twig',

                [
                    'user' => $user,
                    'tour' => $tour,
                    'reserva' => $reserva
                ]
            );

            //* Enviar e-mail de notificación al administrador
            $mailerService->send(
                'reserva@freetourgo.com',
                'Nueva reserva realizada',
                'notification_nueva_reserva_email.html.twig',
                [
                    'reserva' => $reserva,
                    'user' => $user
                ]
            );

            $es->updateEventFromReserva($reserva, $detallesReserva, $tour);

            $mensaje = $translator->trans('Your booking has been confirmed, an e-mail has been sent, please check the spam');

            $this->addFlash('success', $mensaje);

            return $this->redirectToRoute('validar_reserva', ['id' => $reserva->getId(), 
            '_locale' => $locale]);
        }

        return $this->render('reserva/show.html.twig', [
            'tours' => $tours,
            'form' => $form,
            'detallesReserva' => $detallesReserva,
            'categoria' => $categoria,
            'cantidad' => $cantidad,
            'totalReserva' => $totalReserva,
            'reserva' => $reserva,
            'cantidadAdultos' => $cantidadAdultos,
            'id' => $detallesReserva->getId(),
            '_locale' => $locale
        ]);
    }


    #[Route('edit_reserva/{id}/{_locale}', name: 'editar', methods: ['GET', 'POST'])]
    public function editar(
        Request $request,
        EntityManagerInterface $em,
        RequestStack $rs,
        Reserva $reserva,
        MailerService $mailerService,
        TourRepository $tourRepository,
        BlogCategoriaRepository $blogCategoriaRepository, TranslatorInterface $translator
    ): Response {
        $detallesReserva = $reserva->getDetallesReserva();
        $tour = $reserva->getTours()->first();
        
        $tours = $tourRepository->findAll();

        $user = $this->getUser();
        
        $locale = $request->getLocale();

        $categorias = $blogCategoriaRepository->findAll();

        foreach($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);

        $form = $this->createForm(DetallesReservaFormType::class, $detallesReserva);
        $form->handleRequest($request);

        $cantidadAdultos = $detallesReserva->getCantidadAdultos();
        $cantidadKids = $detallesReserva->getCantidadKids();
        $precio = $tour->getPrecio();

        if ($cantidadAdultos !== null && $cantidadKids !== null) {
            $cantidad = $cantidadAdultos + $cantidadKids;
            $totalReserva = $cantidad * $precio;
        } else {
            $totalReserva = 0;
        }

        if ($form->isSubmitted() && $form->isValid()) {
            // Actualizar la reserva existente con los nuevos detalles
            $detallesReserva->setCantidad($cantidad)
                ->setTotalReserva($totalReserva);

            $fechaReserva = $detallesReserva->getFechaEvento()->format('Y-m-d');
            $fechaActual = new DateTime("now");
            $fechaActual = $fechaActual->format('Y-m-d');

            if ($fechaReserva < $fechaActual) {

                $mensaje = $translator->trans('The date of the event cannot be earlier than the current date, please modify the date of the reservation');

                $this->addFlash('danger', $mensaje);

                return $this->redirectToRoute('editar', [
                    'id' => $reserva->getId(), 
                    '_locale' => $locale
                ]);
            }

            $detallesReserva->getFechaEvento($fechaReserva);

            $em->persist($reserva);
            $em->flush();

             //* Enviar e-mail de confirmacion
             $mailerService->send(
                $reserva->getUser()->getEmail(),
                'Modificacion de su reserva',
                'confirmation_modification_reserva_email.html.twig',

                [
                    'user' => $user,
                    'tour' => $tour,
                    'reserva' => $reserva
                ]
            );

            //* Enviar e-mail de notificación al administrador
            $mailerService->send(
                'reserva@freetourgo.com',
                'Modificacion reserva realizada',
                'notification_modification_reserva_email.html.twig',
                [
                    'reserva' => $reserva,
                    'user' => $user
                ]
            );

            
            $es = new EventoService($em, $rs); 
            $es->updateEventFromReserva($reserva, $detallesReserva, $tour);

            $mensaje = $translator->trans('Your booking has been successfully modified, you can find the details on your profile');

            $this->addFlash('success', $mensaje);

            return $this->redirectToRoute('validar_reserva', ['id' => $reserva->getId(), 
            '_locale' => $locale]);
        }

        return $this->render('reserva/editar.html.twig', [
            'tours' => $tours,
            'tour' => $tour,
            'form' => $form->createView(),
            'detallesReserva' => $detallesReserva,
            'cantidad' => $cantidad,
            'totalReserva' => $totalReserva,
            'reserva' => $reserva,
            'cantidadAdultos' => $cantidadAdultos,
            'categoria' => $categoria, 
            '_locale' => $locale
        ]);
    }

    #[Route('delete_reserva/{id}/{_locale}', name: 'delete_reserva')]
    public function deleteReserva($id, TranslatorInterface $translator, Request $request)
    {
        $reserva = $this->em->getRepository(Reserva::class)->find($id);
        $locale = $request->getLocale();

        if (!$reserva) {
            throw $this->createNotFoundException('No se encontró la reserva con el id ' . $id);
        }

        $this->em->remove($reserva);
        $this->em->flush();

        $mensaje = $translator->trans('Booking cancelled or deleted');

        $this->addFlash('info', $mensaje);

        // Aquí puedes redirigir a una página adecuada después de eliminar la reserva
        return $this->redirectToRoute('reservas', [
         '_locale' => $locale   
        ] 
        );
    }


    #[Route('/validar_reserva/{id}/{_locale}', name: 'validar_reserva')]
    public function validarReserva(
        $id,
        ReservaRepository $repo,
        Request $request,
        BlogCategoriaRepository $blogCategoriaRepository,
        TourRepository $tourRepository
    ) {
        // Obtener la reserva específica del usuario (la que acaba de crear)
        $reserva = $repo->find($id);
        $locale = $request->getLocale();

        $categorias = $blogCategoriaRepository->findAll();

        $tours = $tourRepository->findAll();

        foreach($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);

        if (!$reserva) {
            throw $this->createNotFoundException('Reserva no encontrada');
        }

        $user = new User;
        $form = $this->createForm(UserFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $nombre = $user->getNombre();
            $apellidos = $user->getApellidos();
            $user->setNombre($nombre)
                ->setApellidos($apellidos);
            $this->em->persist($user);
            $this->em->flush();
        }

        return $this->render('app/validar_reserva.html.twig', [
            'reserva' => $reserva,
            'tours' => $tours,
            'categoria' => $categoria,
            '_locale' => $locale,
            'userForm' => $form->createView()
        ]);
    }
}
