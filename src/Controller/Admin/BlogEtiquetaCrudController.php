<?php

namespace App\Controller\Admin;

use App\Entity\BlogEtiqueta;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class BlogEtiquetaCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return BlogEtiqueta::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
        ->setEntityLabelInPlural('BlogEtiquetas')
        ->setEntityLabelInSingular('BlogEtiqueta');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('titulo')
        ];
    }
}
