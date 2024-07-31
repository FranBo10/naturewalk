<?php

namespace App\Controller\Admin;

use App\Entity\Tour;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\BooleanFilter;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class TourCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Tour::class;
    }

    public function configureCrud(Crud $crud): Crud 
    {
        return $crud
        ->setEntityLabelInPlural('Tours')
        ->setEntityLabelInSingular('Tour');
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add(BooleanFilter::new('estado', 'Filtrar por Tours Activos'));
            
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TimeField::new('hora_inicio', 'Inicio')->setFormat('short')->onlyOnForms(),
            TimeField::new('hora_fin', 'Fin')->setFormat('short')->onlyOnForms(),
            ChoiceField::new('duracion', 'Duracion')
                ->setChoices($this->generateTimeRangeChoices(0, 0, 10, 0, 15))
                ->onlyOnForms(),
            TextField::new('rango', 'Rango')->hideOnForm()->formatValue(function ($value, $entity) {
                return $entity->getHoraInicio()->format('H:i') . ' - ' . $entity->getHoraFin()->format('H:i');
            }),
            TextField::new('titulo', 'Titulo'),
            TextField::new('descripcion_corta', 'Descripcion corta')->onlyOnForms(),
            TextEditorField::new('descripcion_larga', 'Descripcion larga')->onlyOnForms(),
            ImageField::new('imagen', 'Imagen')
                ->setBasePath('uploads/images')->setUploadDir('public/uploads/images/')->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')->onlyWhenUpdating()->setFormTypeOptions([
                    'required' => false,
                ]),
            ImageField::new('imagen', 'Imagen')
                ->setBasePath('uploads/images')->setUploadDir('public/uploads/images/')->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')->onlyWhenCreating(),
            ImageField::new('imagen', 'Imagen')->setBasePath('uploads/images/')->hideOnForm(),
            MoneyField::new('precio', 'Precio')->setCurrency('EUR'),
            TextField::new('comienzo', 'Punto de encuento')->onlyOnForms(),
            TextField::new('final', 'Punto de llegada')->onlyOnForms(),
            TextareaField::new('mapaComienzo', 'Direccion del mapa comienzo (Google)')->onlyOnForms(),
            TextareaField::new('mapaFinal', 'Direccion del mapa final (Google)')->onlyOnForms(),
            IntegerField::new('stock'),
            IntegerField::new('orden'),
            BooleanField::new('estado', 'Activo'),
        ];
    }

    public function createEntity(string $entityFqcn)
    {
        $tour = new $entityFqcn;
        return $tour;
    }

    private function generateTimeRangeChoices($startHour, $startMinute, $endHour, $endMinute, $step)
{
    $rangos = [];
    $currentHour = $startHour;
    $currentMinute = $startMinute;

    while ($currentHour < $endHour || ($currentHour == $endHour && $currentMinute <= $endMinute)) {
        // Formatear la hora y los minutos como "X h Y m"
        $rangos[] = sprintf('%d h %02d m', $currentHour, $currentMinute);
        $currentMinute += $step;
        if ($currentMinute >= 60) {
            $currentHour++;
            $currentMinute = 0;
        }
    }

    $choices = [];
    foreach ($rangos as $rango) {
        $choices[$rango] = $rango;
    }

    return $choices;
}
}
