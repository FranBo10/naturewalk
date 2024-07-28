<?php

namespace App\Service;

use DateTime;
use App\Entity\Tour;
use App\Entity\User;
use App\Entity\Comentario;
use Doctrine\ORM\EntityManagerInterface;

class ComentarioService
{
    private $em;

    public function __construct(EntityManagerInterface $em,)
    {
        $this->em = $em;
    }

    public function persistComentario(Comentario $comentario, User $user, Tour $tour): void
    {

        $comentario->setIsAprobado(false)
            ->setAutor($user)
            ->setTour($tour)
            ->setFechaRegistro(new DateTime('now'));
            
        $this->em->persist($comentario);
        $this->em->flush();
    }

    // public function isSend(Comentario $comentario): void
    // {
    //     $comentario->setIsSend(true);

    //     $this->manager->persist($comentario);
    //     $this->manager->flush();
    // }
}
