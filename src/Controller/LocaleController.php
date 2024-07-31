<?php 

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;

class LocaleController extends AbstractController
{    
    #[Route(path: '/change-locale/{_locale}', name: 'change_locale')]
    public function changeLocale(string $_locale, Request $request): RedirectResponse
    {
        // Establecer la localización en la sesión
        $request->getSession()->set('_locale', $_locale);

        // Redirigir al usuario a la página anterior
        $referer = $request->headers->get('referer');
        return $this->redirect($referer);
    }
}
