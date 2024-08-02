<?php

namespace App\Controller;

use App\Entity\Tour;
use App\Entity\User;
use App\Entity\Slider;
use App\Entity\Reserva;
use App\Entity\Comentario;
use App\Form\UserFormType;
use App\Entity\DetallesEvento;
use App\Form\ComentarioFormType;
use App\Repository\TourRepository;
use App\Repository\UserRepository;
use App\Service\ComentarioService;
use App\Form\DetallesEventoFormType;
use App\Repository\EventoRepository;
use App\Repository\ReservaRepository;
use App\Repository\ComentarioRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\BlogCategoriaRepository;
use App\Repository\DetallesReservaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AppController extends AbstractController
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    #[Route('/', name: 'default')]
    public function default(Request $request): RedirectResponse
    {

        $locale = $request->getLocale();
        // Redirigir a la ruta home con el idioma predeterminado
        return $this->redirectToRoute('home', ['_locale' => $locale]);
    }

    #[Route('/{_locale}', name: 'home')]
    public function index(TourRepository $repo, BlogCategoriaRepository $blogCategoriaRepository, Request $request): Response
    {
        $tours = $repo->findBy([], ['orden' => 'ASC']);
        $categorias = $blogCategoriaRepository->findAll();

        $locale = $request->getLocale();
        $request->setLocale($locale);

        foreach ($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);

        return $this->render('app/index.html.twig', [
            'tours' => $tours,
            'categoria' => $categoria,
            '_locale' => $locale
        ]);
    }


    #[Route('/tour/{id}/{_locale}', name: 'tour', methods: ['GET', 'POST'])]
    public function tour($id, TourRepository $repo, ComentarioService $comentarioService, ComentarioRepository $comentarioRepository, Request $request, BlogCategoriaRepository $blogCategoriaRepository, TranslatorInterface $translator): Response
    {

        $tour = $this->em->getRepository(Tour::class)->find($id);
        $tours = $repo->findAll();
        $user = $this->getUser();
        $categorias = $blogCategoriaRepository->findAll();
        $locale = $request->getLocale();

        foreach ($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);



        if (!$tour) {
            throw $this->createNotFoundException('Tour no encontrado');
        }

        $sliders = $this->em->getRepository(Slider::class)->findBy(['tour' => $tour]);

        $comentario = new Comentario();
        $comentarios = $comentarioRepository->findComentarios($tour);

        $form = $this->createForm(ComentarioFormType::class, $comentario);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $comentario = $form->getData();

            $nota = $request->request->get('nota');

            $comentario->setNota($nota);


            $comentarioService->persistComentario($comentario, $user, $tour);

            $mensaje = $translator->trans('Thank you for giving your comment, pending for validation');

            $this->addFlash('success', $mensaje);

            $this->redirectToRoute('tour', [
                'id' => $tour->getId(), 
            '_locale' => $locale
        ]);
        }

        return $this->render('app/tour.html.twig', [
            'tour' => $tour,
            'tours' => $tours,
            'sliders' => $sliders,
            'categoria' => $categoria,
            'comentarios' => $comentarios,
            'form' => $form->createView(),
        ]);
    }


    #[Route('/cuenta/{id}/{_locale}', name: "cuenta")]
    public function miCuenta(
        Request $request,
        TourRepository $repo,
        User $user,
        UserRepository $userRepository,
        SessionInterface $session,
        BlogCategoriaRepository $blogCategoriaRepository, TranslatorInterface $translator
    ) {
        $avatars = [];
        for ($i = 1; $i <= 24; $i++) {
            $nameAvatar = "avatar_" . $i;
            $avatars[] = $nameAvatar;
        }

        $tours = $repo->findAll();

        $categorias = $blogCategoriaRepository->findAll();
        $locale = $request->getLocale();

        foreach ($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);

        $users = $userRepository->findAll();

        $form = $this->createForm(UserFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $avatar = $form->get('avatar')->getData();

            if ($avatar === null) {
                $avatar = $user->getAvatar();
            }

            $user->setAvatar($avatar);

            $this->em->persist($user);
            $this->em->flush();

            $mensaje = $translator->trans('Your user account has been modified');

            $this->addFlash('success', $mensaje);
            return $this->redirectToRoute('cuenta', ['id' => $user->getId(), 
            '_locale' => $locale]);
        }

        $selectedAvatar = $session->get('selected_avatar', $avatars[0]);

        return $this->render('cliente/cuenta.html.twig', [
            'userForm' => $form->createView(),
            'tours' => $tours,
            'users' => $users,
            'avatars' => $avatars,
            'categoria' => $categoria,            
            'selectedAvatar' => $selectedAvatar
        ]);
    }


    // #[Route('/cuenta/editar/{id}', name: "cuenta_editar")]
    // public function cuentaEditar(
    //     Request $request,
    //     TourRepository $repo,
    //     User $user,
    //     UserRepository $userRepository
    // ) {
    //     $avatars = [];
    //     for ($i = 1; $i <= 24; $i++) {
    //         $nameAvatar = "avatar_" . $i;
    //         $avatars[] = $nameAvatar;
    //     }

    //     $tours = $repo->findAll();

    //     $users = $userRepository->findAll();

    //     $form = $this->createForm(UserFormType::class, $user);
    //     $form->handleRequest($request);

    //     if ($form->isSubmitted() && $form->isValid()) {

    //         $avatar = $form->get('avatar')->getData();
    //         $user->setAvatar($avatar);

    //         $this->em->persist($user);
    //         $this->em->flush();

    //         dd($user);

    //         $this->addFlash('success', 'Su cuenta de usuario ha sido modificada');
    //         return $this->redirectToRoute('cuenta');
    //     }

    //     return $this->render('cliente/cuenta.html.twig', [
    //         'tour' => $tours,
    //         'users' => $users,
    //         'avatars' => $avatars,
    //         'form' => $form->createView()
    //     ]);
    // }

    #[Route('/actualizar_avatar_session', name: 'actualizar_avatar_session', methods: "POST")]
    public function actualizarAvatarSession(Request $request, SessionInterface $session): Response
    {
        $avatar = $request->get('avatar');

        $session->set('selected_avatar', $avatar);

        return new JsonResponse(['success' => true]);
    }

    #[IsGranted("ROLE_USER")]
    #[Route('/reservas/{_locale}', name: 'reservas')]
    public function reserva(
        Request $request,
        ReservaRepository $reservaRepository,
        DetallesReservaRepository $detallesReservaRepository,
        EventoRepository $eventoRepository,
        TourRepository $repo,
        BlogCategoriaRepository $blogCategoriaRepository
    ): Response {
        $user = $this->getUser();
        $eventos = $eventoRepository->findByUserOrderedByFechaEventoDesc($user);
        $reservas = $reservaRepository->findAll();

        $tours = $repo->findAll();
        $categorias = $blogCategoriaRepository->findAll();

        foreach ($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }
        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);

        return $this->render('cliente/reservas.html.twig', [
            'eventos' => $eventos,
            'reservas' => $reservas,
            'tours' => $tours,
            'categoria' => $categoria
        ]);
    }
}
