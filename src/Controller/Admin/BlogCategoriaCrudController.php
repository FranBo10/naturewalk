<?php

namespace App\Controller\Admin;

use App\Entity\BlogCategoria;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class BlogCategoriaCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return BlogCategoria::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('titulo', 'Titulo'),
            ImageField::new('imagen', 'Imagen')
                ->setBasePath('uploads/images/blog')->setUploadDir('public/uploads/images/blog/')->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')->onlyWhenUpdating()->setFormTypeOptions([
                    'required' => false,
                ]),
            ImageField::new('imagen', 'Imagen')
                ->setBasePath('uploads/images/blog')->setUploadDir('public/uploads/images/blog/')->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')->onlyWhenCreating(),
            ImageField::new('imagen', 'Imagen')->setBasePath('uploads/images/blog/')->hideOnForm(),
            DateTimeField::new('fecha_registro')->setFormat('d/M/Y')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
        ->setEntityLabelInPlural('BlogCategorias')
        ->setEntityLabelInSingular('BlogCategoria')
        ->setDefaultSort(['fecha_registro' => 'DESC']);
    }

    public function createEntity(string $entityFqcn): BlogCategoria
    {
        $blogCategoria = new BlogCategoria();
        $blogCategoria->setFechaRegistro(new \DateTime());

        return $blogCategoria;
    }
}
