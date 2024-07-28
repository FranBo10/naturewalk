<?php

namespace App\Controller\Admin;

use App\Entity\Tour;
use App\Entity\User;
use App\Entity\Evento;
use App\Entity\Reserva;
use App\Form\UserFormType;
use App\Entity\DetallesEvento;
use App\Repository\TourRepository;
use App\Form\DetallesEventoFormType;
use App\Repository\EventoRepository;
use App\Repository\ReservaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class EventoController extends AbstractController
{

    private $em;

    private $rs;

    public function __construct(EntityManagerInterface $em, RequestStack $rs)
    {
        $this->em = $em;
        $this->rs = $rs;
    }

    #[Route('/admin/evento/{id}', name: 'evento')]
    public function evento(Request $request, Tour $tour, TourRepository $tourRepository, ReservaRepository $ReservaRepository, Reserva $reserva, DetallesEvento $detallesEvento = null)
    {

        if (!$tour) {
            return $this->redirectToRoute('home');
        }

        if ($detallesEvento == null) {
            $detallesEvento = new DetallesEvento;
        }

        $tours = $tourRepository->findAll();

        $evento = new Evento();

        $user = $this->getUser();

        $titulo = $tour->getTitulo();
        $inicio = $ReservaRepository->getFechaEvento()->format('d/m/Y');
        $fin = $ReservaRepository->getFechaEvento()->format('d/m/Y');
        $fecha_evento = $ReservaRepository->getFechaEvento()->format('d/m/Y');
        $cantidadAdultos = $ReservaRepository->getCantidadAdultos();
        $cantidadKids = $ReservaRepository->getCantidadKids();
        $color = "#18bb9c";

        if ($cantidadAdultos !== null && $cantidadKids !== null) {
            $cantidadAsistentes = $cantidadAdultos + $cantidadKids;
        } else {
            $cantidadAsistentes = 0;
        }

        $evento->setUser($user)
            ->setTitulo($titulo)
            ->setInicio($inicio)
            ->setFin($fin)
            ->setFechaEvento($fecha_evento)
            ->setCantidad($cantidadAsistentes)
            ->setColor($color)
            ->setCerrado(false)
            ->addReserva($reserva);

        // $efectivo = $detallesEvento->getEfectivo();
        // $tarjeta = $detallesEvento->getTarjeta();
        // $observaciones = $detallesEvento->getObservaciones();
        // $asistencia = $detallesEvento->isAsistencia();
        // $foto = $detallesEvento->getFoto();

        // $form = $this->createForm(DetallesEventoFormType::class, $detallesEvento);
        // $form->handleRequest($request);

        // if ($form->isSubmitted() && $form->isValid()) {
        //     $detallesEvento->setId($detallesEvento->getId())
        //         ->setEfectivo($efectivo)
        //         ->setTarjeta($tarjeta)
        //         ->setObservaciones($observaciones)
        //         ->setAsistencia($asistencia)
        //         ->setFoto($foto)
        //         ->setUser($this->getUser()) .
        //* TODO ?? ->setTour($tour);

        // $evento->addDetallesEvento($detallesEvento);
        $evento->addReserva($reserva);

        $this->em->persist($evento);
        $this->em->flush();

        return $this->render("admin/evento.html.twig", [
            'tour' => $tours,
            'detallesEvento' => $detallesEvento,
            'cantidadAsistentes' => $cantidadAsistentes,
            'evento' => $evento,
            'id' => $detallesEvento->getId()
        ]);
    }
}

//  #[Route('/evento/tratar/{id}', name: 'evento_agregar')]
//     public function agregarEvento(Request $request): Response
//     {

//         // Obtener el evento usando el ID
//         $evento = $this->em->getRepository(Evento::class)->find($id);        
    
//         // Verificar si el evento existe
//         if (!$evento) {
//             return new JsonResponse(['error' => 'Evento no encontrado'], 404);
//         }
    
//         // Crear un nuevo objeto DetallesEvento
//         $detallesEvento = new DetallesEvento();
    
//         // Obtener y procesar los datos del formulario
//         $efectivo = $request->request->get('efectivo');
//         $observaciones = $request->request->get('observaciones');
//         $totalAsistentes = $request->request->get('cantidad_asistentes');
//         $guia = $request->request->get('user_id');
//         $eventoCerrado = $request->request->get('evento_cerrado');
    
//         $observacionesArray = json_decode($observaciones, true);        
    
//         $asistentesConfirmados = (int)$totalAsistentes;
//         $efectivoFloat = floatval($efectivo);
    
//         // Configurar el objeto DetallesEvento
//         $detallesEvento
//             ->setUser($this->getUser())
//             ->setEvento($evento)
//             ->setEfectivo($efectivoFloat)
//             ->setObservaciones($observacionesArray)
//             ->setTarjeta(0)
//             ->setFoto(null)
//             ->setAsistencia(1)
//             ->setCantidadAsistentes($asistentesConfirmados);
    
//         // Validar el objeto DetallesEvento
//         $errors = $validator->validate($detallesEvento);
//         if (count($errors) > 0) {
//             $errorsString = (string) $errors;
//             return new JsonResponse(['error' => $errorsString], 400);
//         }
    
//         // Persistir el objeto DetallesEvento en la base de datos
//         $em->persist($detallesEvento);

//         // Actualizar el estado de cerrado del evento
//         $evento->setCerrado(true);
//         $em->persist($evento);

//         $em->flush();
    
//         $this->addFlash('success', 'El tour ha sido validado correctamente');
        
//         return new JsonResponse(['success' => 'Detalles guardados correctamente'], 200);

//         $observacionGuia = new ObservacionGuia();

//         $formObservacion = $this->createForm(ObservacionGuiaFormType::class, $observacionGuia);
//         $formObservacion->handleRequest($request);

//         if ($formObservacion->isSubmitted() && $formObservacion->isValid()) {
//             $observacionGuia = $formObservacion->getData();
//             $evento = $eventoRepository->find($id_evento); 

            
//             $observacionGuia = $observacionGuiaService->persistObservacionGuia($observacionGuia, $this->getUser(), $evento);

//             return new JsonResponse([
//                 'id' => $observacionGuia->getId(),
//                 'autor_id' => $observacionGuia->getAutor()->getId(),
//                 'autor_nombre' => $observacionGuia->getAutor()->getNombre(),
//                 'autor_apellidos' => $observacionGuia->getAutor()->getApellidos(),
//                 'autor_avatar' => $observacionGuia->getAutor()->getAvatar(),
//                 'evento_id' => $observacionGuia->getEvento()->getId(),
//                 'contenido' => $observacionGuia->getContenido(),
//                 'fecha_registro' => $observacionGuia->getFechaRegistro()->format('Y-m-d H:i:s')
//             ]);
//         }

//         return $this->render('eventos/evento.html.twig', [            
//             'formObservacion' => $formObservacion->createView(),
//         ]);
//     }


    // #[Route('admin/validar_evento/{id}', name: 'validar_evento')]
    // public function validarEvento($id, EventoRepository $repo, Request $request)
    // {
    //     // Obtener la reserva específica del usuario (la que acaba de crear)
    //     $evento = $repo->find($id);

    //     if (!$evento) {
    //         throw $this->createNotFoundException('Evento no encontrado');
    //     }

    //     $user = new User;
    //     $form = $this->createForm(UserFormType::class, $user);
    //     $form->handleRequest($request);

    //     if ($form->isSubmitted() && $form->isValid()) {
    //         $user = $form->getData();
    //         $nombre = $user->getNombre();
    //         $apellidos = $user->getApellidos();
    //         $user->setNombre($nombre)
    //             ->setApellidos($apellidos);
    //         $this->em->persist($user);
    //         $this->em->flush();
    //         $this->addFlash('success', 'Su evento ha sido confirmado, gracias.');
    //     }

    //     return $this->render('evento/validar_evento.html.twig', [
    //         'evento' => $evento,
    //         'userForm' => $form->createView()
    //     ]);
    // }
// }
