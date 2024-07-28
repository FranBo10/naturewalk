<?php

namespace App\Controller\Admin;

use App\Entity\Reserva;
use App\Form\TourFormType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\TextFilter;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\DateTimeFilter;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ReservaCrudController extends AbstractCrudController
{
    use Trait\SoloLecturaTrait;

    public static function getEntityFqcn(): string
    {
        return Reserva::class;
    }  

    public function configureCrud(Crud $crud): Crud 
    {
        return $crud
        ->setEntityLabelInPlural('Reservas')
        ->setEntityLabelInSingular('Reserva')
        ->setDefaultSort(['fecha_registro' => 'DESC']);
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add(DateTimeFilter::new('fecha_registro', 'Filtrar por Fecha de Reserva'))
            ->add(TextFilter::new('referencia', 'Filtrar por Referencia'));
            
    }

    public function configureFields(string $pageName): iterable
    {

        return [
            TextField::new('referencia', 'Referencia')->hideOnForm(),
            CollectionField::new('tours', 'Tour')
                ->setFormTypeOptions([
                    'class' => 'App\Entity\Tour',
                    'label' => 'Tour'
                ]),
            AssociationField::new('user', 'Usuario')
                ->setCrudController(UserCrudController::class)
                ->setRequired(true)
                ->autocomplete()
                ->setFormTypeOptions([
                    'class' => 'App\Entity\User',
                    'label' => 'User'
                ]),
            AssociationField::new('detallesReserva', 'Pax')
                ->setRequired(true)
                ->autocomplete()
                ->setFormTypeOptions([
                    'class' => 'App\Entity\DetallesReserva',
                    'label' => 'Pax',
                    'choice_label' => 'cantidad', 
                ]),
            AssociationField::new('evento', 'Fecha del evento')
                ->setCrudController(EventoCrudController::class)
                ->setFormTypeOptions([
                    'class' => 'App\Entity\Evento',
                    'label' => 'Fecha del evento',
                    'choice_label' => 'fecha_evento'
                ]),
            // ChoiceField::new('estado')->setChoices(['El pedido se encuentra en la cesta' => 'El pedido se encuentra en la cesta', 'confirmado' => 'confirmado']),
            DateTimeField::new('fecha_registro', 'Fecha reserva')->setFormat('d/M/Y')->hideOnForm(),
            // Otros campos aquí...
        ];
        // }
    }
}
