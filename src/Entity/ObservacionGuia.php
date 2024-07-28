<?php

namespace App\Entity;

use App\Repository\ObservacionGuiaRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ObservacionGuiaRepository::class)]
class ObservacionGuia
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotBlank]
    private string $contenido;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'observacionesGuia')]
    #[ORM\JoinColumn(nullable: false)]
    private User $autor;

    #[ORM\ManyToOne(targetEntity: Evento::class, inversedBy: 'observacionesGuia')]
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

    public function getContenido(): ?string
    {
        return $this->contenido;
    }

    public function setContenido(string $contenido): static
    {
        $this->contenido = $contenido;

        return $this;
    }

    public function getAutor(): ?User
    {
        return $this->autor;
    }

    public function setAutor(?User $autor): static
    {
        $this->autor = $autor;

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

   

    
}
