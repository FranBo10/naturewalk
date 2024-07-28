<?php

namespace App\Entity;

use App\Repository\RangoRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RangoRepository::class)]
class Rango
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 5, nullable: true)] // Cambiar el tipo de datos a string
    private ?string $hora_inicio = null;

    #[ORM\Column(type: 'string', length: 5, nullable: true)] // Cambiar el tipo de datos a string
    private ?string $hora_fin = null;

    #[ORM\Column]
    private ?int $step = 15;

    #[ORM\Column(length: 80)]
    private ?string $rango = null;

    #[ORM\ManyToOne(inversedBy: 'rangos')]
    private ?Horario $horario = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHoraInicio(): ?string
    {
        return $this->hora_inicio;
    }

    public function setHoraInicio(?string $hora_inicio): static
    {
        $this->hora_inicio = $hora_inicio;

        return $this;
    }

    public function getHoraFin(): ?string
    {
        return $this->hora_fin;
    }

    public function setHoraFin(?string $hora_fin): static
    {
        $this->hora_fin = $hora_fin;

        return $this; 
    }

    public function getStep(): ?int
    {
        return $this->step;
    }

    public function setStep(int $step): static
    {
        $this->step = $step;

        return $this;
    }

    public function getRango(): ?string
    {
        return $this->rango;
    }

    public function setRango(string $hora_inicio, string $hora_fin): static
    {
        $this->rango = $hora_inicio . ' - ' . $hora_fin;
        return $this;
    }


    public function getHorario(): ?Horario
    {
        return $this->horario;
    }

    public function setHorario(?Horario $horario): static
    {
        $this->horario = $horario;

        return $this;
    }

    public function __toString()
    {
        return $this->getHoraInicio() . ' - ' . $this->getHoraFin();
    }
}
