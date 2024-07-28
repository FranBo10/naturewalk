<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\MailerService;
use App\Form\RegistrationFormType;
use App\Repository\TourRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\BlogCategoriaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class RegistrationController extends AbstractController
{
    #[Route('/registro/agregar', name: 'registro_agregar')]
    public function agregarRegistro(Request $request): Response
    {
        $user = new User();
        $avatars = [];
        for ($i = 1; $i <= 24; $i++) {
            $nameAvatar = "avatar_" . $i;
            $avatars[] = $nameAvatar;
        }


        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        return $this->render('registro/registro.html.twig', [
            'registrationForm' => $form->createView(),
            'avatars' => $avatars,
        ]);
    }

    #[Route('/registro/tratar', name: 'registro_tratar')]
    public function tratarRegistro(
        Request $request,
        TourRepository $repo,
        UserPasswordHasherInterface $userPasswordHasher,
        EntityManagerInterface $entityManager,
        MailerService $mailerService,
        TokenGeneratorInterface $tokenGeneratorInterface,
        SessionInterface $session,
        BlogCategoriaRepository $blogCategoriaRepository
    ): Response {
        $user = new User();
        $avatars = [];
        for ($i = 1; $i <= 24; $i++) {
            $nameAvatar = "avatar_" . $i;
            $avatars[] = $nameAvatar;
        }

        $tours = $repo->findAll();

        $categorias = $blogCategoriaRepository->findAll();

        foreach ($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);

        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $token = $tokenGeneratorInterface->generateToken();
            $avatar = $form->get('avatar')->getData();
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );


            $user->setToken($token)
                ->setAvatar($avatar)
                ->setRoles($user->getRoles("ROLE_USER"))
                ->setFechaRegistro(new \Datetime)
                ->setColor(null);

            $entityManager->persist($user);
            $entityManager->flush();

            // Enviar e-mail de confirmacion
            $mailerService->send(
                $user->getEmail(),
                'Confirmacion de su cuenta',
                'confirmation_email.html.twig',
                [
                    'user' => $user,
                    'token' => $token,
                    'token_life_time' => $user->getTokenLifeTime()->format('d/m/y a las H\hi')
                ]
            );

            $this->addFlash('success', 'Le hemos enviado un e-mail para verificar su cuenta, compruebe su bandeja de correo no deseado');
            return $this->redirectToRoute('app_login');
        }

        $selectedAvatar = $session->get('selected_avatar', $avatars[0]);

        return $this->render('registro/registro_tratar.html.twig', [
            'registrationForm' => $form->createView(),
            'tours' => $tours,
            'avatars' => $avatars,
            'categoria' => $categoria,
            'selectedAvatar' => $selectedAvatar
        ]);
    }

    #[Route('/actualizar-avatar-session', name: 'actualizar_avatar_session', methods: "POST")]
    public function actualizarAvatarSession(Request $request, SessionInterface $session): Response
    {
        $avatar = $request->get('avatar');

        $session->set('selected_avatar', $avatar);

        return new JsonResponse(['success' => true]);
    }


    #[Route('/verify/{token}/{id\d+>}', name: 'account_verify', methods: ['GET'])]
    public function verifyUserEmail($token, User $user, EntityManagerInterface $entityManager): Response
    {
        if ($user->getToken() !== $token) {
            throw new AccessDeniedException();
        }

        if ($user->getToken() === null) {
            throw new AccessDeniedException();
        }

        if (new \DateTime('now') > $user->getTokenLifeTime()) {
            throw new AccessDeniedException();
        }

        $user->setIsVerified(true);
        $user->setToken(null);
        $entityManager->flush();

        $this->addFlash("success", "Su cuenta ha sido verificada con éxito, ya puede conectarse");

        return $this->redirectToRoute('app_login');
    }
}
