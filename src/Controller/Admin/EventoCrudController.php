<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\Evento;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Dto\SearchDto;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use App\Controller\Admin\Filter\DateCalendarFilter;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ColorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\BooleanFilter;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\DateTimeFilter;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FilterCollection;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class EventoCrudController extends AbstractCrudController
{
    use Trait\EdicionTrait;

    // use Trait\SoloLecturaTrait;
    private $entityManager;

    // Inyecta el EntityManager a través del constructor
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public static function getEntityFqcn(): string
    {
        return Evento::class;
    }  

    public function configureCrud(Crud $crud): Crud 
    {
        return $crud
        ->setEntityLabelInPlural('Eventos')
        ->setEntityLabelInSingular('Evento')
        ->setDefaultSort(['fecha_evento' => 'DESC']);
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add(DateTimeFilter::new('fecha_evento', 'Filtrar por Fecha del Evento'));
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm()->hideOnIndex(),
            TextField::new('titulo', 'Titulo'),
            AssociationField::new('tour', 'Tour')
                ->setRequired(true)
                ->autocomplete()
                ->setFormTypeOptions([
                    'class' => 'App\Entity\Tour',
                    'label' => 'Tour',
                ]),
            AssociationField::new('user', 'Guia')
                ->setCrudController(GuiaCrudController::class)
                ->setRequired(true)
                ->autocomplete()
                ->setFormTypeOptions([
                    'class' => 'App\Entity\User',
                    'label' => 'Guia',
                    'attr' => [
                        'data-ea-autocomplete-query' => 'ROLE_GUIA',
                    ]
                ]),
            DateTimeField::new('inicio', 'Fecha del Evento')->setFormat('EEEE, d MMMM \'\'yy'),
            CollectionField::new('imagenes', 'Imagenes')
                ->setEntryType(FileType::class)
                ->setFormTypeOptions([
                    'multiple' => true,
                    'mapped' => false,
                ]),
            //     ImageField::new('imagenes', 'Imagen')
            //     ->setBasePath('uploads/images')
            //     ->setUploadDir('public/uploads/images/')
            //     ->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')
            //     ->onlyWhenUpdating()
            //     ->setFormTypeOptions([
            //         'required' => false
            //     ]),
            // ImageField::new('imagenes', 'Imagen')
            //     ->setBasePath('uploads/images/')
            //     ->setUploadDir('public/uploads/images/')
            //     ->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')
            //     ->onlyWhenCreating(),
            // ImageField::new('imagenes', 'Imagen')->setBasePath('uploads/images/')->hideOnForm(),
        
        ];
    }

    public function createIndexQueryBuilder(SearchDto $searchDto, EntityDto $entityDto, FieldCollection $fields, FilterCollection $filters): QueryBuilder
    {
        $queryBuilder = parent::createIndexQueryBuilder($searchDto, $entityDto, $fields, $filters);
        
        if (0 === count($searchDto->getSort())) {
            $queryBuilder->addOrderBy('entity.fecha_evento', 'DESC');
        }

        return $queryBuilder;
    }

    // public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    // {
    //     /** @var Evento $entityInstance */
    //     $uploadedFiles = $this->getContext()->getRequest()->files->get('Evento')['imagenes'];

    //     if ($uploadedFiles) {
    //         foreach ($uploadedFiles as $uploadedFile) {
    //             $imagen = new Imagen();
    //             $imagen->setRuta($uploadedFile->getClientOriginalName());
    //             $imagen->setEvento($entityInstance);
    //             $entityManager->persist($imagen);

    //             // Mueve el archivo a su directorio de destino
    //             $uploadedFile->move('public/uploads/images/fotosTours/', $uploadedFile->getClientOriginalName());
    //         }
    //     }

    //     parent::persistEntity($entityManager, $entityInstance);
    // }
}
