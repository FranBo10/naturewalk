<?php

namespace App\Entity;

use App\Repository\DetallesReservaRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DetallesReservaRepository::class)]
class DetallesReserva
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $cantidad = 0;

    #[ORM\Column]
    private ?int $total_reserva = null;

    #[ORM\Column]
    private ?int $cantidad_adultos = 1;

    #[ORM\Column(nullable: true)]
    private ?int $cantidad_kids = 0;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_evento = null;

    public function __construct()
    {
        $this->fecha_evento = new \DateTime();
        $this->cantidad_adultos = 1;
        $this->cantidad_kids = 0;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    public function getCantidad(): ?int
    {
        return $this->cantidad;
    }

    public function setCantidad(int $cantidad): static
    {
        $this->cantidad = $cantidad;

        return $this;
    }

    public function getTotalReserva(): ?int
    {
        return $this->total_reserva;
    }

    public function setTotalReserva(int $totalReserva): static
    {
        $this->total_reserva = $totalReserva;

        return $this;
    }

    public function getCantidadAdultos(): ?int
    {
        return $this->cantidad_adultos;
    }

    public function setCantidadAdultos(int $cantidad_adultos): static
    {
        $this->cantidad_adultos = $cantidad_adultos;

        return $this;
    }

    public function getCantidadKids(): ?int
    {
        return $this->cantidad_kids;
    }

    public function setCantidadKids(?int $cantidad_kids): static
    {
        $this->cantidad_kids = $cantidad_kids;

        return $this;
    }

    public function getFechaEvento(): ?\DateTimeInterface
    {
        return $this->fecha_evento;
    }

    public function setFechaEvento(\DateTimeInterface $fecha_evento): static
    {
        $this->fecha_evento = $fecha_evento;

        return $this;
    }

    public function __toString()
    {
        return $this->cantidad;
    }
}