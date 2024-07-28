<?php

namespace App\Controller\Admin;

use App\Entity\DetallesEvento;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\DateTimeFilter;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class DetallesEventoCrudController extends AbstractCrudController
{
    use Trait\EdicionTrait;

    public static function getEntityFqcn(): string
    {
        return DetallesEvento::class;
    }  

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('DetallesEventos')
            ->setEntityLabelInSingular('DetallesEvento')
            ->setDefaultSort(['evento.fecha_evento' => 'DESC']);
    }

    // public function configureFilters(Filters $filters): Filters
    // {
    //     return $filters
    //         ->add(DateTimeFilter::new('evento.fecha_evento', 'Filtrar por Fecha de Evento'));
    // }

    public function configureFields(string $pageName): iterable
    {
        return [
            AssociationField::new('evento', 'Fecha evento')->hideOnForm()
            ->setCrudController(EventoCrudController::class)
            ->setFormTypeOptions([
                'class' => 'App\Entity\Evento',
                'choice_label' => 'id'
            ]),
            IdField::new('id')->hideOnForm(),
            MoneyField::new('efectivo')->setCurrency('EUR')->setStoredAsCents(false),
            IntegerField::new('tarjeta'),
            IntegerField::new('cantidad_asistentes')->formatValue(function ($value, $entity) {
                return $value . ' PAX';
            }),
            IntegerField::new('mediaPorTour', 'Media tour')->onlyOnIndex()->formatValue(function ($value, $entity) {
                /** @var DetallesEvento $entity */
                return $entity->getMediaPorTour() !== null ? number_format($entity->getMediaPorTour(), 2) : 'N/A';
            }),
            CollectionField::new('evento.imagenes', 'Foto')
            ->setEntryType(FileType::class),
            
        ];
    }
}
