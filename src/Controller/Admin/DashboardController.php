<?php

namespace App\Controller\Admin;

use App\Entity\Blog;
use App\Entity\Tour;
use App\Entity\User;
use App\Entity\Rango;
use App\Entity\Evento;
use App\Entity\Slider;
use App\Entity\Horario;
use App\Entity\Reserva;
use App\Entity\Comentario;
use App\Entity\BlogEtiqueta;
use App\Entity\BlogCategoria;
use App\Entity\DetallesEvento;
use App\Entity\DetallesReserva;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{

    public function __construct(private AdminUrlGenerator $adminUrlGenerator)
    {
    }
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $url = $this->adminUrlGenerator->setController(TourCrudController::class)->generateUrl();

        return $this->redirect($url);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Community');
    }

    public function configureMenuItems(): iterable
    {
        return [
            MenuItem::linkToDashboard('BACKOFFICE', 'fa fa-home'),
            MenuItem::section('Ir a web'),
            MenuItem::linkToRoute('Página principal', 'fa fa-igloo', 'home'),
            MenuItem::section('Usuarios'),
            MenuItem::subMenu('Usuarios', 'fas fa-users')->setSubItems([
                MenuItem::linkToCrud('Mostrar usuarios', 'fas fa-eye', User::class),
                MenuItem::linkToCrud('Nuevo usuario', 'fas fa-plus', User::class)->setAction(Crud::PAGE_NEW)
            ]),
            MenuItem::subMenu('Guias', 'fas fa-umbrella')->setSubItems([
                MenuItem::linkToCrud('Mostrar guias', 'fas fa-eye', User::class)
                    ->setController(GuiaCrudController::class),
                // MenuItem::linkToCrud('Nuevo guia', 'fas fa-plus', User::class)->setAction(Crud::PAGE_NEW)
                // ->setController(GuiaCrudController::class),  
            ]),
            MenuItem::subMenu('Clientes', 'fas fa-male')->setSubItems([
                MenuItem::linkToCrud('Mostrar clientes', 'fa fa-eye', User::class)
                    ->setController(ClienteCrudController::class),
                MenuItem::linkToCrud('Nuevo cliente', 'fas fa-plus', User::class)->setAction(Crud::PAGE_NEW)
                    ->setController(ClienteCrudController::class),
            ]),
            MenuItem::section('SuperAdmin'),
            MenuItem::linkToCrud('Eventos', 'fa fa-calendar', Evento::class),
            MenuItem::linkToCrud('DetallesEventos', 'fa fa-dollar', DetallesEvento::class),
            MenuItem::linkToCrud('Reservas', 'fa fa-book', Reserva::class),
            MenuItem::linkToCrud('Tours', 'fa fa-flag', Tour::class),
            MenuItem::subMenu('Disponibilidad', 'fa fa-ban')->setSubItems([
                MenuItem::linkToCrud('Horarios', 'fas fa-clock', Horario::class),
                MenuItem::linkToCrud('Rangos', 'fa fa-clock', Rango::class),
            ]),
            MenuItem::subMenu('Blog', 'fa fa-book')->setSubItems([
                MenuItem::linkToCrud('Mostrar Categorias', 'fas fa-flag', BlogCategoria::class),
                MenuItem::linkToCrud('Mostrar Etiquetas', 'fas fa-tags', BlogEtiqueta::class),
                MenuItem::linkToCrud('Mostrar Blogs', 'fa fa-book', Blog::class),
            ]),
            // MenuItem::linkToCrud('Categoria Blog', 'fa fa-flag', BlogCategoria::class),
            // MenuItem::linkToCrud('Blogs', 'fa fa-flag', Blog::class),
            MenuItem::linkToCrud('Comentarios', 'fa fa-comment', Comentario::class),
            MenuItem::linkToCrud('Sliders', 'fa fa-sliders', Slider::class),
        ];
    }
}
