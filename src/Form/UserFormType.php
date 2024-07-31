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
            'label' => "Name",
            'constraints' => [
                new NotBlank([
                    'message' => 'Please enter your name',
                ]),
                new Length(min: 2)
            ]
        ])
        ->add('apellidos', TextType::class, [
            'label' => "Last name",
            'constraints' => [
                new NotBlank([
                    'message' => 'Please enter your last name',
                ])
            ]
        ])
            ->add('email', EmailType::class, [
                'label' => "Email",
                'constraints' => [new NotBlank([
                    'message' => 'Please enter your email address',
                ]),
                new Email([
                    'message' => 'The e-mail address introduced "{{ value }}" is not valid.',
                ]),
                ]
            ])
            ->add('telefono', TelType::class, [
                'label' => "Phone N°.",
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a phone number',
                    ])
                ]
            ])
            ->add('pais', CountryType::class, ['label' => 'Country', 'placeholder' => 'Select your country'])
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
