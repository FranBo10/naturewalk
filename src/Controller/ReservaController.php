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

    #[Route('/reserva/{id}', name: 'show')]
    public function show(
        Request $request,
        EntityManagerInterface $em,
        Tour $tour,
        TourRepository $tourRepository,
        EventoService $es,
        MailerService $mailerService,
        BlogCategoriaRepository $blogCategoriaRepository,
        EventoRepository $eventoRepository
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

                $this->addFlash('danger', 'La fecha del evento no puede ser anterior a la fecha actual, por favor modifica la fecha de la reserva');

                return $this->redirectToRoute('show', [
                    'id' => $tour->getId()
                ]);
            }
            
            $evento = $eventoRepository->findOneBy(['tour' => $tour, 'fecha_evento' => new DateTime($fechaReserva)]);
        if ($evento && $evento->isCerrado()) {
            $this->addFlash('danger', 'El evento está cerrado y no puede recibir más reservas.');
            return $this->redirectToRoute('show', ['id' => $tour->getId()]);
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
                            $this->addFlash('danger', 'Ups! No tenemos visita este día para este tour, por favor modifica la fecha de reserva');
                            return $this->redirectToRoute('show', ['id' => $tour->getId()]);
                        }
                    }
                }
            }

            $detallesReserva->getFechaEvento($fechaReserva);

            $reserva->setDetallesReserva($detallesReserva);

            if ($detallesReserva->getCantidad() >= $tour->getStock()) {
                $this->addFlash('danger', 'Se ha alcanzado el número máximo de asistentes por evento.');

                return $this->redirectToRoute('show', [
                    'id' => $tour->getId()
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
                    $this->addFlash('danger', 'Le informamos que tan solo quedan ' . $cantidadRestante . ' plazas libres para la actividad de hoy');
                    return $this->redirectToRoute('show', ['id' => $tour->getId()]);
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


            $this->addFlash('success', 'Su reserva ha sido confirmada, un e-mail ha sido enviado, compruebe el correo no deseado');

            return $this->redirectToRoute('validar_reserva', ['id' => $reserva->getId()]);
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
            'id' => $detallesReserva->getId()
        ]);
    }


    #[Route('edit_reserva/{id}', name: 'editar', methods: ['GET', 'POST'])]
    public function editar(
        Request $request,
        EntityManagerInterface $em,
        RequestStack $rs,
        Reserva $reserva,
        MailerService $mailerService,
        TourRepository $tourRepository,
        BlogCategoriaRepository $blogCategoriaRepository
    ): Response {
        $detallesReserva = $reserva->getDetallesReserva();
        $tour = $reserva->getTours()->first();
        
        $tours = $tourRepository->findAll();

        $user = $this->getUser();

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
                $this->addFlash('danger', 'La fecha del evento no puede ser anterior a la fecha actual, por favor modifica la fecha de la reserva');

                return $this->redirectToRoute('editar', [
                    'id' => $reserva->getId()
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

            $this->addFlash('success', 'Su reserva ha sido modificada con éxito, puede encontrar los detalles en su perfil');

            return $this->redirectToRoute('validar_reserva', ['id' => $reserva->getId()]);
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
        ]);
    }

    #[Route('delete_reserva/{id}', name: 'delete_reserva')]
    public function deleteReserva($id)
    {
        $reserva = $this->em->getRepository(Reserva::class)->find($id);

        if (!$reserva) {
            throw $this->createNotFoundException('No se encontró la reserva con el id ' . $id);
        }

        $this->em->remove($reserva);
        $this->em->flush();

        $this->addFlash('info', 'La reserva ha sido suprimida');

        // Aquí puedes redirigir a una página adecuada después de eliminar la reserva
        return $this->redirectToRoute('reservas');
    }


    #[Route('/validar_reserva/{id}', name: 'validar_reserva')]
    public function validarReserva(
        $id,
        ReservaRepository $repo,
        Request $request,
        BlogCategoriaRepository $blogCategoriaRepository,
        TourRepository $tourRepository
    ) {
        // Obtener la reserva específica del usuario (la que acaba de crear)
        $reserva = $repo->find($id);

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
            'userForm' => $form->createView()
        ]);
    }
}