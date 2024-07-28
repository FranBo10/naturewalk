<?php

namespace App\Controller\Admin;

use App\Entity\Rango;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class RangoCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Rango::class;
    }  

    public function configureCrud(Crud $crud): Crud 
    {
        return $crud
        ->setEntityLabelInPlural('Rangos')
        ->setEntityLabelInSingular('Rango');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            ChoiceField::new('hora_inicio', 'Hora de Inicio')
                ->setChoices($this->generateTimeRangeChoices(9, 0, 23, 0, 15))
                ->onlyOnForms(),
            ChoiceField::new('hora_fin', 'Hora de Finalización')
                ->setChoices($this->generateTimeRangeChoices(9, 0, 23, 0, 15))
                ->onlyOnForms(),
            IntegerField::new('step', "Intervalo")->hideOnForm(),
            TextField::new('rango', 'Rango')->hideOnForm()->formatValue(function ($value, $entity) {
                return $entity->getHoraInicio() . ' - ' . $entity->getHoraFin();
            }),
        ];
    }

    public function createEntity(string $entityFqcn)
    {
        $rango = new $entityFqcn;
        $rango->setStep(15);
        $rango->setRango('09:00', '23:00');

        return $rango;
    }

    private function generateTimeRangeChoices($startHour, $startMinute, $endHour, $endMinute, $step)
    {
        $rangos = [];
        $currentHour = $startHour;
        $currentMinute = $startMinute;

        while ($currentHour < $endHour || ($currentHour == $endHour && $currentMinute <= $endMinute)) {
            $rangos[] = sprintf('%02d:%02d', $currentHour, $currentMinute);
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

    // public function configureCrud(Crud $crud): Crud
    // {
    //     return $crud
    //         ->setEntityLabelInPlural('Rangos')
    //         ->setEntityLabelInSingular('Rango')
    //         ->setDefaultSort(['id' => 'DESC']);
    // }
}
