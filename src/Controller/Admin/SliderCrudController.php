<?php

namespace App\Controller\Admin;

use App\Entity\Slider;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class SliderCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Slider::class;
    }  

    public function configureCrud(Crud $crud): Crud 
    {
        return $crud
        ->setEntityLabelInPlural('Sliders')
        ->setEntityLabelInSingular('Slider');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            ImageField::new('imagen', 'Imagen')
                ->setBasePath('uploads/images')
                ->setUploadDir('public/uploads/images/')
                ->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')
                ->onlyWhenUpdating()
                ->setFormTypeOptions([
                    'required' => false
                ]),
            ImageField::new('imagen', 'Imagen')
                ->setBasePath('uploads/images')
                ->setUploadDir('public/uploads/images/')
                ->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')
                ->onlyWhenCreating(),
            ImageField::new('imagen', 'Imagen')->setBasePath('uploads/images/')->hideOnForm(),
            TextField::new('titulo', 'Titulo'),
            ChoiceField::new('orden', 'Orden')->setChoices([
                '1' => 1,
                '2' => 2,
                '3' => 3,
                '4' => 4,
                '5' => 5
            ]),
            AssociationField::new('tour', 'Tour')->renderAsNativeWidget(),

            DateTimeField::new('fecha_registro', 'Fecha de registro')->setFormat('d/M/Y - H:m')->hideOnForm(),
        ];
    }

    public function createEntity(string $entityFqcn)
    {
        $slider = new $entityFqcn;
        $slider->setFechaRegistro(new \Datetime);
        return $slider;
    }
}
