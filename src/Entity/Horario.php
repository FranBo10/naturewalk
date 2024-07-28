<?php

namespace App\Entity;

use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\HorarioRepository;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: HorarioRepository::class)]
class Horario
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToMany(targetEntity: Tour::class, inversedBy: 'horarios')]
    private Collection $tours;

    #[ORM\Column]
    private ?bool $activo = false;

    #[ORM\OneToMany(mappedBy: 'horario', targetEntity: Rango::class)]
    private Collection $rangos;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $fecha_tour = null;

    public function __construct()
    {
        $this->rangos = new ArrayCollection();
        $this->tours = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, Tour>
     */
    public function getTours(): Collection
    {
        return $this->tours;
    }

    public function addTour(Tour $tour): static
    {
        if (!$this->tours->contains($tour)) {
            $this->tours->add($tour);
        }

        return $this;
    }

    public function removeTour(Tour $tour): static
    {
        $this->tours->removeElement($tour);

        return $this;
    }

    public function isActivo(): ?bool
    {
        return $this->activo;
    }

    public function setActivo(bool $activo): static
    {
        $this->activo = $activo;

        return $this;
    }

    /**
     * @return Collection<int, Rango>
     */
    public function getRangos(): Collection
    {
        return $this->rangos;
    }

    public function addRango(Rango $rango): static
    {
        if (!$this->rangos->contains($rango)) {
            $this->rangos->add($rango);
            $rango->setHorario($this);
        }

        return $this;
    }

    public function removeRango(Rango $rango): static
    {
        if ($this->rangos->removeElement($rango)) {
            // set the owning side to null (unless already changed)
            if ($rango->getHorario() === $this) {
                $rango->setHorario(null);
            }
        }

        return $this;
    }

    public function getFechaTour(): ?\DateTimeInterface
    {
        return $this->fecha_tour;
    }

    public function setFechaTour(?\DateTimeInterface $fecha_tour): static
    {
        $this->fecha_tour = $fecha_tour;

        return $this;
    }
}
