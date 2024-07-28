<?php

namespace App\Controller\Admin;

use DateTime;
use App\Entity\Tour;
use App\Entity\Horario;
use Doctrine\ORM\EntityManagerInterface;
use App\Controller\Admin\RangoCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class HorarioCrudController extends AbstractCrudController
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }
    public static function getEntityFqcn(): string
    {
        return Horario::class;
    }  

    public function configureCrud(Crud $crud): Crud 
    {
        return $crud
        ->setEntityLabelInPlural('Horarios')
        ->setEntityLabelInSingular('Horario');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('tours', 'Tours')
            ->setCrudController(TourCrudController::class)
            ->setRequired(true)
            ->setFormTypeOptions([
                'multiple' => true,
            ])
            ->formatValue(function ($value, $entity) {
                $tours = $entity->getTours();
                $tourTitles = [];
                foreach ($tours as $tour) {
                    $tourTitles[] = $tour->getTitulo();
                }
                return implode(', ', $tourTitles);
            }),
            AssociationField::new('rangos', 'Rangos')
                ->setCrudController(RangoCrudController::class)
                ->setFormTypeOptions([
                    'multiple' => true,
                ])
                ->formatValue(function ($value, $entity) {
                    $rangos = $entity->getRangos();
                    $rangoHorarios = [];
                    foreach ($rangos as $rango) {
                        $rangoHorarios[] = $rango->getHoraInicio() . ' - ' . $rango->getHoraFin();
                    }
                    return implode(', ', $rangoHorarios);
                }),
            DateField::new('fecha_tour', 'Fecha'),

            BooleanField::new('activo', 'No disponible'),
        ];
    }

    public function createEntity(string $entityFqcn)
    {
        $horario = new Horario();
        $horario->setFechaTour(new DateTime()); // Establecer la fecha actual por defecto
        return $horario;
    }

    // public function configureCrud(Crud $crud): Crud
    // {
    //     return $crud
    //         ->setEntityLabelInPlural('Horarios')
    //         ->setEntityLabelInSingular('Horario')
    //         ->setDefaultSort(['id' => 'DESC']);
    // }
}
