<?php

namespace App\Entity;

use App\Repository\ReservaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReservaRepository::class)]
class Reserva
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $estado = null;

    #[ORM\Column(length: 255)]
    private ?string $referencia = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_registro = null;

    #[ORM\ManyToMany(targetEntity: Tour::class, inversedBy: 'reservas')]
    private Collection $tours;

    #[ORM\ManyToOne(inversedBy: 'reservas')]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'reservas')]
    private ?Evento $evento = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'], orphanRemoval: true)]
    private ?DetallesReserva $detallesReserva = null;

    public function __construct()
    {
        $this->fecha_registro = new \DateTimeImmutable();
        $this->tours = new ArrayCollection();
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

    public function getEstado(): ?string
    {
        return $this->estado;
    }

    public function setEstado(string $estado): static
    {
        $this->estado = $estado;

        return $this;
    }

    public function getReferencia(): ?string
    {
        return $this->referencia;
    }

    public function setReferencia(string $referencia): static
    {
        $this->referencia = $referencia;

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

    /**
     * @return Collection<int, tour>
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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

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

    public function getDetallesReserva(): ?DetallesReserva
    {
        return $this->detallesReserva;
    }

    public function setDetallesReserva(?DetallesReserva $detallesReserva): static
    {
        $this->detallesReserva = $detallesReserva;

        return $this;
    }
}
