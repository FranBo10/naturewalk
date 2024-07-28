<?php

namespace App\Form;

use App\Entity\DetallesEvento;
use App\Entity\User;
use App\Entity\ObservacionGuia;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Constraints\GreaterThanOrEqual;

class ObservacionGuiaFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('contenido', TextareaType::class, [
                'label' => false,
            ])
//             ->add('fecha_registro')
//             ->add('autor', EntityType::class, [
//                 'class' => User::class,
// 'choice_label' => 'id',
//             ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ObservacionGuia::class,
        ]);
    }
}
