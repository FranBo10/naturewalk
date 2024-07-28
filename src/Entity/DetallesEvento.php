<?php

namespace App\Entity;

use App\Repository\DetallesEventoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DetallesEventoRepository::class)]
class DetallesEvento
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?float $efectivo = null;

    #[ORM\Column(nullable: true)]
    private ?float $tarjeta = null;

    #[ORM\Column]
    private ?bool $asistencia = null;

    #[ORM\ManyToOne(inversedBy: 'detallesEventos')]
    private ?Evento $evento = null;

    #[ORM\ManyToOne(inversedBy: 'detallesEvento')]
    private ?User $user = null;

    #[ORM\Column]
    private ?int $cantidad_asistentes = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    public function getEfectivo(): ?float
    {
        return $this->efectivo;
    }

    public function setEfectivo(float $efectivo): static
    {
        $this->efectivo = $efectivo;

        return $this;
    }

    public function getTarjeta(): ?float
    {
        return $this->tarjeta;
    }

    public function setTarjeta(?float $tarjeta): static
    {
        $this->tarjeta = $tarjeta;

        return $this;
    }

    public function isAsistencia(): ?bool
    {
        return $this->asistencia;
    }

    public function setAsistencia(bool $asistencia): static
    {
        $this->asistencia = $asistencia;

        return $this;
    }

    public function getEvento(): ?Evento
    {
        return $this->evento;
    }

    public function setEvento(?Evento $evento): static
    {
        $this->evento = $evento;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getCantidadAsistentes(): ?int
    {
        return $this->cantidad_asistentes;
    }

    public function setCantidadAsistentes(int $cantidad_asistentes): static
    {
        $this->cantidad_asistentes = $cantidad_asistentes;

        return $this;
    }

    public function getMediaPorTour(): ?float
    {
        if ($this->cantidad_asistentes > 0) {
            return ($this->efectivo + $this->tarjeta) / $this->cantidad_asistentes;
        }
        
        return null;
    }

    public function getFechaEvento(): ?\DateTimeInterface
    {
        return $this->evento ? $this->evento->getFechaEvento() : null;
    }

    
}
