<?php

namespace App\Service;

use DateTime;
use App\Entity\Reserva;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class ReservaService
{
    private $manager;

    private $rs;

    public function __construct(EntityManagerInterface $manager, RequestStack $rs)
    {
        $this->manager = $manager;
        $this->rs = $rs;
    }

    public function addAdulto($qtAdd = 1)
    {
        
        $cantidadAdultos = $this->manager->DetallesReservaRepository()->getCantidadAdultos;
        
            if(!empty($cantidadAdultos))
             {   
                if($cantidadAdultos - $qtAdd >= 0 )
                {
                    $cantidadAdultos += $qtAdd;
                }
            }else
            {
            $cantidadAdultos = $qtAdd; 
            }      

    }

    public function addKid($qtAdd = 1)
    {
        
        $cantidadAdultos = $this->manager->DetallesReservaRepository()->getCantidadKids;
        
            if(!empty($cantidadKids))
             {   
                if($cantidadKids - $qtAdd >= 0 )
                {
                    $cantidadKids += $qtAdd;
                }
            }else
            {
            $cantidadKids = $qtAdd; 
            }      

    }
    public function less($id)
    {
        //Nous récupérons ou créons une session gâce à la classe RequsStack (service)
        $session = $this->rs->getSession();

        $cart = $session->get('cart', []);
        $qt = $session->get('qt', 0);
        if($cart[$id] != 1)
        {
            $cart[$id]--;
            $qt--;
        }else
        {
            unset($cart[$id]);
            $qt--;
        }

        $session->set('qt', $qt);
        $session->set('cart', $cart);
    }
}
