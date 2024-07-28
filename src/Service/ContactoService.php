<?php

namespace App\Service;

use DateTime;
use App\Entity\Contacto;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class ContactoService
{
    private $manager;

    private $rs;

    public function __construct(EntityManagerInterface $manager, RequestStack $rs)
    {
        $this->manager = $manager;
        $this->rs = $rs;
    }

    public function persistContacto(Contacto $contacto): void
    {
        $contacto->setCreatedAt(new DateTime('now'))
                ->setIsSend(false);
        $this->manager->persist($contacto);
        $this->manager->flush();
        $this->rs->getSession()->getFlashBag()->add('success', 'Su mensaje ha sido enviado, gracias.');
    }

    public function isSend(Contacto $contacto): void
    {
        $contacto->setIsSend(true);

        $this->manager->persist($contacto);
        $this->manager->flush();
    }
}
