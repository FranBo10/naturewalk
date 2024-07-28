<?php

namespace App\Controller;

use App\Entity\Contacto;
use App\Form\ContactoFormType;
use App\Repository\BlogCategoriaRepository;
use App\Service\ContactoService;
use App\Repository\TourRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactoController extends AbstractController
{
    #[Route('/contacto', name: 'contacto')]
    public function index(Request $request, ContactoService $cs, TourRepository $repo, BlogCategoriaRepository $blogCategoriaRepository): Response
    {
        $contacto = new Contacto;

        $tours = $repo->findAll(); 
        $categorias = $blogCategoriaRepository->findAll();

        foreach($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);

        $form = $this->createForm(ContactoFormType::class, $contacto);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $contacto = $form->getData();
            $cs->persistContacto($contacto);

            return $this->redirectToRoute('contacto');
        }


        return $this->render('contacto/index.html.twig', [
            'form' => $form->createView(),
            'tours' => $tours,
            'categoria' => $categoria

        ]);
    }
}

