<?php

namespace App\Service;

use DateTime;
use App\Entity\Evento;
use App\Entity\User;
use App\Entity\ObservacionGuia;
use Doctrine\ORM\EntityManagerInterface;

class ObservacionGuiaService
{
    private $em;

    public function __construct(EntityManagerInterface $em,)
    {
        $this->em = $em;
    }

    public function persistObservacionGuia(ObservacionGuia $observacionGuia, User $user): ObservacionGuia
    {

        $observacionGuia
            ->setAutor($user)
            ->setFechaRegistro(new DateTime('now'));
            
        $this->em->persist($observacionGuia);
        $this->em->flush();

        return $observacionGuia;
    }
}
