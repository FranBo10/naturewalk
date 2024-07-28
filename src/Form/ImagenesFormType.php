<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;

class ImagenesFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
         $builder
            ->add('imagenes', FileType::class, [
                'label' => 'Selecciona imágenes',
                'multiple' => true,
                'mapped' => false,
                'required' => false,
                'attr' => [
                    'name' => 'imagenes[]' // Asegúrate de que el nombre del campo sea correcto
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
}
