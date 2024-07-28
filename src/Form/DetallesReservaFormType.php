<?php

namespace App\Form;

use DateTime;
use App\Entity\DetallesReserva;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class DetallesReservaFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        $choices = [];
        for ($i = 0; $i <= 10; $i++) {
            $choices[$i] = $i;
        }
        $builder
            ->add('cantidad_adultos', ChoiceType::class, [
                'label' => false,
                'choices' => $choices
            ])
            ->add('cantidad_kids', ChoiceType::class, [
                'label' => false,
                'choices' => $choices
            ])
            ->add('fecha_evento', DateType::class, [ 
                'label' => false,
                'widget' => 'single_text'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => DetallesReserva::class,
        ]);
    }
}
