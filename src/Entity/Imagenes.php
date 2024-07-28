<?php

namespace App\Entity;

use App\Entity\DetallesEvento;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ImagenesRepository;

#[ORM\Entity(repositoryClass: ImagenesRepository::class)]
class Imagenes
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nombre = null;    

    #[ORM\ManyToOne(targetEntity: Evento::class, inversedBy: 'imagenes')]
    #[ORM\JoinColumn(nullable: false)]
    private Evento $evento;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_registro = null;

    public function __construct()
    {
        $this->fecha_registro = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): static
    {
        $this->nombre = $nombre;

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

    public function getFechaRegistro(): ?\DateTimeInterface
    {
        return $this->fecha_registro;
    }

    public function setFechaRegistro(\DateTimeInterface $fecha_registro): static
    {
        $this->fecha_registro = $fecha_registro;

        return $this;
    }

    public function __toString()
    {
        return $this->nombre;
    }
}
