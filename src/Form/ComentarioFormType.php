<?php

namespace App\Form;

use App\Entity\Tour;
use App\Entity\User;
use App\Entity\Comentario;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Constraints\GreaterThanOrEqual;

class ComentarioFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('contenido', TextareaType::class, [
                'label' => false,
            ])
            ->add('nota', HiddenType::class, [
                'constraints' => [
                    new GreaterThanOrEqual([
                        'value' => 1,
                        'message' => 'La nota debe ser mayor o igual que 1.',
                    ]),
                ],
            ]);
//             ->add('fecha_registro')
//             ->add('autor', EntityType::class, [
//                 'class' => User::class,
// 'choice_label' => 'id',
//             ])
//             ->add('tour', EntityType::class, [
//                 'class' => Tour::class,
// 'choice_label' => 'id',
//             ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Comentario::class,
        ]);
    }
}
