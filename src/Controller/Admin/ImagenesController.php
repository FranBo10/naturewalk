<?php

namespace App\Controller\Admin;

use App\Entity\Imagenes;
use App\Entity\Evento;
use App\Form\ImagenesFormType;
use App\Repository\ImagenesRepository;
use App\Repository\EventoRepository;
use App\Service\PictureService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ImagenesController extends AbstractController
{
    #[Route('admin/guia/imagen/{id}', name: 'add_imagen', methods: ["POST"])]
    public function addImagenAction(
        Evento $evento,
        Request $request,
        PictureService $pictureService,
        EntityManagerInterface $em
    ): Response {
        // Recuperar el ID del evento del formulario
        $eventoId = $request->request->get('evento_img_id');
        
        // Asegurarse de que el evento se obtiene correctamente
        $evento = $em->getRepository(Evento::class)->find($eventoId);
    
        $imagenes = new Imagenes();
    $formImagenes = $this->createForm(ImagenesFormType::class, $imagenes);
    $formImagenes->handleRequest($request);

    if ($formImagenes->isSubmitted() && $formImagenes->isValid()) {
        $images = $formImagenes->get('imagenes')->getData();

        if ($images) {
            $imagenesResponse = [];
            foreach ($images as $image) {
                $folder = 'fotosTours';
                $fichier = $pictureService->add($image, $folder, 150, 150);
                $img = new Imagenes();
                $img->setNombre($fichier);
                $img->setEvento($evento); // Asociar la imagen con el evento
                $em->persist($img);
                $em->flush();

                $imagenesResponse[] = [
                    'imagen_id' => $img->getId(),
                    'evento_id' => $evento->getId(),
                    'nombre' => $img->getNombre()
                ];
            }

            return new JsonResponse(['success' => true, 'imagenes' => $imagenesResponse]);
        }
    }

    return new JsonResponse(['success' => false, 'error' => 'Formulario no válido']);
}
    


    #[Route('admin/guia/imagen/{id}/delete', name: 'delete_imagen', methods: ["DELETE"])]
    public function deleteImagenAction(
        Request $request,
        Imagenes $imagenes,
        EntityManagerInterface $em
    ): JsonResponse {
        $csrfToken = $request->request->get('_token');
        if (!$this->isCsrfTokenValid('delete_imagen', $csrfToken)) {
            return new JsonResponse(['error' => 'Token CSRF no válido.'], JsonResponse::HTTP_FORBIDDEN);
        }

        try {
            $em->remove($imagenes);
            $em->flush();

            return new JsonResponse(['success' => 'Imagen eliminada correctamente.']);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => 'Error al eliminar la imagen: ' . $e->getMessage()], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
 
