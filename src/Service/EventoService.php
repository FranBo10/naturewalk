<?php

namespace App\Service;

use DateTime;
use App\Entity\User;
use App\Entity\Evento;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;

class EventoService
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function updateEventFromReserva($reserva)
    {
        // Lógica para crear o actualizar el evento según el tour y la fecha de la reserva
        $tours = $reserva->getTours();
        $detallesReserva = $reserva->getDetallesReserva();
        $fechaReserva = $detallesReserva->getFechaEvento()->format('Y-m-d');

        $tour = $tours->first();
        $titulo = $tour->getTitulo();

        $inicio = $fechaReserva;
        $fin = $fechaReserva;
        $cantidadAdultos = $detallesReserva->getCantidadAdultos();
        $cantidadKids = $detallesReserva->getCantidadKids();
        $color = "#18bb9c";

        if ($cantidadAdultos !== null && $cantidadKids !== null) {
            $cantidadAsistentes = $cantidadAdultos + $cantidadKids;
        } else {
            $cantidadAsistentes = 0;
        }

        // Consulta si ya existe un evento para este tour y fecha
        $evento = $this->em
            ->getRepository(Evento::class)
            ->findOneBy(['tour' => $tour, 'fecha_evento' => new DateTime($fechaReserva)]);

        if (!$evento) {
            // Si no existe, crea un nuevo evento
            $evento = new Evento();
            $evento->setTour($tour)
                ->setFechaEvento(new DateTime($fechaReserva));

            $evento->setTitulo($titulo)
                ->setInicio(new DateTime($inicio))
                ->setFin(new DateTime($fin))
                ->setFechaEvento(new DateTime($fechaReserva))
                ->setCantidad($cantidadAsistentes) // Establece la cantidad de la primera reserva como cantidad inicial
                ->setColor($color)
                ->setCerrado(false)
                ->addReserva($reserva);

            // Guarda el evento en la base de datos
            $this->em->persist($evento);
            $this->em->flush();
        } else {
            // Si el evento ya existe, actualiza la cantidad sumando la cantidad de la nueva reserva
            $evento->setCantidad($evento->getCantidad() + $cantidadAsistentes);

            // Actualiza las propiedades del evento según la reserva
            $evento->setTitulo($titulo)
                ->setInicio(new DateTime($inicio))
                ->setFin(new DateTime($fin))
                ->setFechaEvento(new DateTime($fechaReserva))
                ->setColor($color)
                ->setCerrado(false)
                ->addReserva($reserva);

            // Guarda el evento en la base de datos
            $this->em->persist($evento);
            $this->em->flush();
        }
    }
}
