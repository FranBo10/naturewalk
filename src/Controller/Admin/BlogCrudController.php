<?php

namespace App\Controller\Admin;

use App\Entity\Blog;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class BlogCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Blog::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
        ->setEntityLabelInPlural('Blogs')
        ->setEntityLabelInSingular('Blog')
        ->setDefaultSort(['fecha_registro' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('titulo', 'Titulo'),
            AssociationField::new('categoria', 'Categoria')
                ->setCrudController(BlogCategoriaCrudController::class)
                ->setRequired(true)
                ->autocomplete()
                ->setFormTypeOptions([
                    'class' => 'App\Entity\BlogCategoria',
                    'label' => 'Categoria'
                ]),
            AssociationField::new('blogEtiquetas', 'Etiqueta')
                ->setCrudController(BlogEtiquetaCrudController::class)
                ->setFormTypeOptions([
                    'multiple' => true,
                ])
                ->formatValue(function ($value, $entity) {
                    $etiquetas = $entity->getBlogEtiquetas();
                    $blogEtiquetas = [];
                    foreach ($etiquetas as $etiqueta) {
                        $blogEtiquetas[] = $etiqueta->getTitulo();
                    }
                    return implode(', ', $blogEtiquetas);
                }),
            TextField::new('descripcion_corta', 'Descripcion corta'),
            TextEditorField::new('descripcion_larga', 'Descripcion larga')->onlyOnForms(),
            ImageField::new('imagen', 'Imagen')
                ->setBasePath('uploads/images')->setUploadDir('public/uploads/images/blog/')->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')->onlyWhenUpdating()->setFormTypeOptions([
                    'required' => false,
                ]),
            ImageField::new('imagen', 'Imagen')
                ->setBasePath('uploads/images/blog')->setUploadDir('public/uploads/images/blog/')->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')->onlyWhenCreating(),
            ImageField::new('imagen', 'Imagen')->setBasePath('uploads/images/blog/')->hideOnForm(),
            BooleanField::new('estado', 'Activo'),
            DateTimeField::new('fecha_registro')->setFormat('d/M/Y')->hideOnForm(),
        ];
    }

    public function createEntity(string $entityFqcn): Blog
    {
        $blog = new Blog();
        $blog->setFechaRegistro(new \DateTime());

        return $blog;
    }
}
