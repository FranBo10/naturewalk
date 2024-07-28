<?php

namespace App\Controller\Admin;

use App\Entity\ObservacionGuia;
use App\Form\ObservacionGuiaFormType;
use App\Service\ObservacionGuiaService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ObservacionGuiaController extends AbstractController
{
    #[Route('admin/guia/observacion/{id}', name: 'add_observacion', methods: ["POST"])]
    public function addObservacionAction(
        Evento $evento,
        Request $request,
        ObservacionGuiaService $observacionGuiaService
    ): Response {
        // Crear una nueva instancia de ObservacionGuia
        $observacionGuia = new ObservacionGuia();
    
        // Crear y manejar el formulario
        $formObservacion = $this->createForm(ObservacionGuiaFormType::class, $observacionGuia);
        $formObservacion->handleRequest($request);
    
        if ($formObservacion->isSubmitted() && $formObservacion->isValid()) {
            // Obtener los datos del formulario
            $observacionGuia = $formObservacion->getData();
            
            // Asociar la observación al evento
            $observacionGuia->setEvento($evento);
    
            // Persistir la observación usando el servicio
            $observacionGuiaService->persistObservacionGuia($observacionGuia, $this->getUser(), $evento);
    
            // Retornar una respuesta JSON con los detalles de la observación
            return new JsonResponse([
                'observacion_id' => $observacionGuia->getId(),
                'autor_id' => $observacionGuia->getAutor()->getId(),
                'autor_nombre' => $observacionGuia->getAutor()->getNombre(),
                'autor_apellidos' => $observacionGuia->getAutor()->getApellidos(),
                'autor_avatar' => $observacionGuia->getAutor()->getAvatar(),
                'evento_id' => $observacionGuia->getEvento()->getId(),
                'contenido' => $observacionGuia->getContenido(),
                'fecha_registro' => $observacionGuia->getFechaRegistro()->format('Y-m-d H:i:s')
            ]);
        }
    
        // En caso de que el formulario no sea válido o no se haya enviado
        return $this->render('observacion_guia/index.html.twig', [
            'controller_name' => 'ObservacionGuiaController',
            'form' => $formObservacion->createView(),
        ]);
    }

    #[Route('admin/guia/observacion/{id}/delete', name: 'delete_observacion', methods: ["DELETE"])]
public function deleteObservacionAction(
    Request $request,
    ObservacionGuia $observacionGuia,
    EntityManagerInterface $em
): JsonResponse {
    $csrfToken = $request->request->get('_token');
    if (!$this->isCsrfTokenValid('delete_observacion', $csrfToken)) {
        return new JsonResponse(['error' => 'Token CSRF no válido.'], JsonResponse::HTTP_FORBIDDEN);
    }

    try {
        $em->remove($observacionGuia);
        $em->flush();

        return new JsonResponse(['success' => 'Observación eliminada correctamente.']);
    } catch (\Exception $e) {
        return new JsonResponse(['error' => 'Error al eliminar la observación: ' . $e->getMessage()], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }
}

}    
