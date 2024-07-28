<?php

namespace App\Controller;

use App\Entity\BlogCategoria;
use App\Repository\BlogRepository;
use App\Repository\TourRepository;
use App\Repository\BlogEtiquetaRepository;
use App\Repository\BlogCategoriaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BlogController extends AbstractController
{
    #[Route('/blog/{id}', name: 'blog')]
    public function blog($id, TourRepository $tourRepository, BlogEtiquetaRepository $blogEtiquetaRepository, BlogCategoriaRepository $blogCategoriaRepository): Response
    {
        $tours = $tourRepository->findAll();

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $id]);
        if (!$categoria) {
            throw $this->createNotFoundException('Categoría no encontrada');
        }

        $blogs = $categoria->getBlogs();

        $etiquetasPorBlog = [];

        foreach ($blogs as $blog) {
            $etiquetasPorBlog[$blog->getId()] = $blog->getBlogEtiquetas();
        }

        $etiquetas = $blogEtiquetaRepository->findAll();
        $categorias = $blogCategoriaRepository->findAll();

        return $this->render('blog/blog.html.twig', [
            'tours' => $tours,
            'blogs' => $blogs,
            'categorias' => $categorias,
            'etiquetas' => $etiquetas,
            'etiquetasPorBlog' => $etiquetasPorBlog,
            'categoria' => $categoria,
            'titulo' => $categoria->getTitulo()
        ]);
    }
}
