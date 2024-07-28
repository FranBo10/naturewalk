<?php

namespace App\Controller;

use App\Repository\TourRepository;
use App\Repository\BlogCategoriaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    #[Route(path: '/login', name: 'app_login')]
    public function login(
        AuthenticationUtils $authenticationUtils,
        TourRepository $repo,
        BlogCategoriaRepository $blogCategoriaRepository
    ): Response {
        if ($this->getUser()) {
            return $this->redirectToRoute('home');
        }

        $tours = $repo->findAll();
        $categorias = $blogCategoriaRepository->findAll();

        foreach($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername, 'error' => $error,
            "tours" => $tours,
            'categoria' => $categoria
        ]);
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): Response
    {
        $this->addFlash('success', 'Hasta pronto !');

        return $this->redirectToRoute('home');

        // throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
