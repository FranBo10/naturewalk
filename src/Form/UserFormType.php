<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class UserFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nombre', TextType::class, [
                'label' => 'Nombre',
                'constraints' => [
                    new NotBlank(),
                    new Length(min: 2)
                ]
            ])
            ->add('apellidos', TextType::class, [
                'label' => 'Apellidos',
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('email', EmailType::class, [
                'label' => 'E-mail',
                'constraints' => [
                    new NotBlank(),
                    new Email()
                ]
            ])
            ->add('telefono', TelType::class, [
                'label' => 'Teléfono',
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('pais', CountryType::class, ['label' => 'País', 'placeholder' => 'Selecciona tu pais'])
            ->add('avatar', HiddenType::class, [
                'mapped' => false,
            ]);
            
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}