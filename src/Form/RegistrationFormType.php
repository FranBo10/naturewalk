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
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => "Email",
                'constraints' => [new NotBlank([
                    'message' => 'Por favor, introduce tu dirección de correo electrónico',
                ]),
                new Email([
                    'message' => 'La dirección de correo electrónico "{{ value }}" no es válida.',
                ]),
                ]
            ])
            ->add('plainPassword', RepeatedType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'type' => PasswordType::class,
                'first_options' => ['label' => 'Contraseña'],
                'second_options' => ['label' => 'Confirmar contraseña'],
                'invalid_message' => 'Las contraseñas no coinciden',
                'mapped' => false,
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Por favor introduzca una contraseña',
                    ]),
                    new Length([
                        'min' => 5,
                        'minMessage' => 'Su contraseña debe contener al menos {{ limit }} caracteres',
                        'max' => 4096,
                    ]),
                ],
            ])
            ->add('nombre', TextType::class, [
                'label' => "Nombre",
                'constraints' => [
                    new NotBlank([
                        'message' => 'Por favor introduzca su nombre',
                    ]),
                    new Length(min: 2)
                ]
            ])
            ->add('apellidos', TextType::class, [
                'label' => "Apellidos",
                'constraints' => [
                    new NotBlank([
                        'message' => 'Por favor introduzca el apellido',
                    ])
                ]
            ])
            ->add('telefono', TelType::class, [
                'label' => "Teléfono",
                'constraints' => [
                    new NotBlank([
                        'message' => 'Por favor introduzca un teléfono',
                    ])
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
