<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\QueryBuilder;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Dto\SearchDto;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Validator\Constraints\NotBlank;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CountryField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TelephoneField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FilterCollection;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ClienteCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }       

    public function configureCrud(Crud $crud): Crud 
    {
        return $crud
        ->setEntityLabelInPlural('Clientes')
        ->setEntityLabelInSingular('Cliente');

    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('nombre')->setLabel('Nombre')
            ->setCustomOption('constraints', [
                new NotBlank([
                    'message' => 'Por favor rellena el campo Nombre.',
                ]),
            ]),
            TextField::new('apellidos')->setLabel('Apellidos')
            ->setCustomOption('constraints', [
                new NotBlank([
                    'message' => 'Por favor rellena el campo Apellidos.',
                ]),
            ]),
            TextField::new('email')->setLabel('E-Mail')
            ->setCustomOption('constraints', [
                new NotBlank([
                    'message' => 'Por favor rellena el campo E-Mail.',
                ]),
            ]),
            TextField::new('password')->setLabel('Contraseña')->setFormType(PasswordType::class)->onlyWhenCreating(),
            TelephoneField::new('telefono')
            ->setCustomOption('constraints', [
                new NotBlank([
                    'message' => 'Por favor rellena el campo Contrasena.',
                ]),
            ]),
            CountryField::new('pais')
            ->setCustomOption('constraints', [
                new NotBlank([
                    'message' => 'Por favor rellena el campo Pais.',
                ]),
            ]),
            // ChoiceField::new('roles')->setLabel('Rol')->setChoices([
            //     'Usuario'  => 'ROLE_USER',
            //     'Admin' => 'ROLE_ADMIN',
            //     'Guia' => 'ROLE_GUIA',
            // ])->setTemplatePath('admin/field/roles.html.twig')->allowMultipleChoices(),
            DateTimeField::new('fecha_registro')->setLabel('Fecha de registro')->setFormat('d/M/Y - H:m')->hideOnForm(),
        ];

        return parent::configureFields($pageName);
    }

    public function createIndexQueryBuilder(SearchDto $searchDto, EntityDto $entityDto, FieldCollection $fields, FilterCollection $filters): QueryBuilder
    {
        // Filtra los usuarios por el rol 'ROLE_GUIA'.
        return parent::createIndexQueryBuilder($searchDto, $entityDto, $fields, $filters)
            ->andWhere('entity.roles LIKE :role')
            ->setParameter('role', '%"ROLE_USER"%');
    }
}
