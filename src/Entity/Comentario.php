<?php

namespace App\Entity;

use App\Repository\ComentarioRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ComentarioRepository::class)]
class Comentario
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotBlank]
    private string $contenido;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'comentarios')]
    #[ORM\JoinColumn(nullable: false)]
    private User $autor;

    #[ORM\ManyToOne(targetEntity: Tour::class, inversedBy: 'comentarios')]
    #[ORM\JoinColumn(nullable: false)]
    private Tour $tour;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_registro = null;

    #[ORM\Column]
    private bool $isAprobado = false;

    #[ORM\Column]
    private ?int $nota = null;

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

    public function getTour(): ?Tour
    {
        return $this->tour;
    }

    public function setTour(?Tour $tour): static
    {
        $this->tour = $tour;

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

    public function isIsAprobado(): ?bool
    {
        return $this->isAprobado;
    }

    public function setIsAprobado(bool $isAprobado): static
    {
        $this->isAprobado = $isAprobado;

        return $this;
    }

    public function getNota(): ?int
    {
        return $this->nota;
    }

    public function setNota(int $nota): static
    {
        $this->nota = $nota;

        return $this;
    }
}
