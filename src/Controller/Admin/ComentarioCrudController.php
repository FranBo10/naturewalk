<?php

namespace App\Controller\Admin;

use App\Entity\Comentario;
use Doctrine\ORM\QueryBuilder;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Dto\SearchDto;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\BooleanFilter;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FilterCollection;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ComentarioCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Comentario::class;
    }  

    public function configureCrud(Crud $crud): Crud 
    {
        return $crud
        ->setEntityLabelInPlural('Comentarios')
        ->setEntityLabelInSingular('Comentario');
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add(BooleanFilter::new('isAprobado', 'Filtrar por Aprobados'));
            
    }

    public function configureFields(string $pageName): iterable
    {
        return [           
            AssociationField::new('tour', 'Tour')
                ->setCrudController(TourCrudController::class)
                ->setRequired(true)
                ->autocomplete()
                ->setFormTypeOptions([
                    'class' => 'App\Entity\Tour',
                    'label' => 'Tour'
                ]),
            TextField::new('autor', 'Autor'),
            TextEditorField::new('contenido', 'Contenido'),
            BooleanField::new('isAprobado', 'Aprobado'),
            DateTimeField::new('fecha_registro', 'Fecha comentario')->setFormat('EEEE, d MMMM \'\'yy')->hideOnForm(),

        ];
    }

    public function configureActions(Actions $actions): Actions {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }

    public function createIndexQueryBuilder(SearchDto $searchDto, EntityDto $entityDto, FieldCollection $fields, FilterCollection $filters): QueryBuilder
    {
        $queryBuilder = parent::createIndexQueryBuilder($searchDto, $entityDto, $fields, $filters);

        // if user defined sort is not set
        if (0 === count($searchDto->getSort())) {
            $queryBuilder->addOrderBy('entity.fecha_registro', 'DESC');
        }

        return $queryBuilder;
    }
    
}
