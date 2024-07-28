<?php

namespace App\Entity;

use IntlDateFormatter;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\EventoRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: EventoRepository::class)]
class Evento
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $titulo = null;

    #[ORM\Column(length: 50)]
    private ?string $color = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $inicio = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fin = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_evento = null;

    #[ORM\Column]
    private ?bool $cerrado = false;

    #[ORM\Column]
    private ?int $cantidad = 0;

    #[ORM\ManyToOne(inversedBy: 'eventos')]
    private ?Tour $tour = null;

    #[ORM\ManyToOne(inversedBy: 'eventos')]
    private ?User $user = null;

    #[ORM\OneToMany(mappedBy: 'evento', targetEntity: DetallesEvento::class, cascade: ["persist", "remove"])]
    private Collection $detallesEventos;

    #[ORM\OneToMany(mappedBy: 'evento', targetEntity: ObservacionGuia::class, orphanRemoval: true, cascade: ["persist", "remove"])]
    private Collection $observacionesGuia;

    #[ORM\OneToMany(mappedBy: 'evento', targetEntity: Imagenes::class, orphanRemoval: true, cascade: ["persist", "remove"])]
    private Collection $imagenes;

    #[ORM\OneToMany(mappedBy: 'evento', targetEntity: Reserva::class, cascade: ["persist", "remove"], orphanRemoval:true)]
    private Collection $reservas;

    public function __construct()
    {
        $this->detallesEventos = new ArrayCollection();
        $this->reservas = new ArrayCollection();
        $this->observacionesGuia = new ArrayCollection();
        $this->imagenes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitulo(): ?string
    {
        return $this->titulo;
    }

    public function setTitulo(string $titulo): static
    {
        $this->titulo = $titulo;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function getGuiaColor(): ?string
    {
        return $this->user ? $this->user->getColor() : null;
    }

    public function getInicio(): ?\DateTimeInterface
    {
        return $this->inicio;
    }

    public function setInicio(\DateTimeInterface $inicio): static
    {
        $this->inicio = $inicio;

        return $this;
    }

    public function getFin(): ?\DateTimeInterface
    {
        return $this->fin;
    }

    public function setFin(\DateTimeInterface $fin): static
    {
        $this->fin = $fin;

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

    public function isCerrado(): ?bool
    {
        return $this->cerrado;
    }

    public function setCerrado(bool $cerrado): static
    {
        $this->cerrado = $cerrado;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

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

    /**
     * @return Collection<int, DetallesEvento>
     */
    public function getDetallesEventos(): Collection
    {
        return $this->detallesEventos;
    }

    public function addDetallesEvento(DetallesEvento $detallesEvento): static
    {
        if (!$this->detallesEventos->contains($detallesEvento)) {
            $this->detallesEventos->add($detallesEvento);
            $detallesEvento->setEvento($this);
        }

        return $this;
    }

    public function removeDetallesEvento(DetallesEvento $detallesEvento): static
    {
        if ($this->detallesEventos->removeElement($detallesEvento)) {
            // set the owning side to null (unless already changed)
            if ($detallesEvento->getEvento() === $this) {
                $detallesEvento->setEvento(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Reserva>
     */
    public function getReservas(): Collection
    {
        return $this->reservas;
    }

    public function addReserva(Reserva $reserva): static
    {
        if (!$this->reservas->contains($reserva)) {
            $this->reservas->add($reserva);
            $reserva->setEvento($this);
        }

        return $this;
    }

    public function removeReserva(Reserva $reserva): static
    {
        if ($this->reservas->removeElement($reserva)) {
            // set the owning side to null (unless already changed)
            if ($reserva->getEvento() === $this) {
                $reserva->setEvento(null);
            }
        }

        return $this;
    }   

      /**
     * @return Collection<int, ObservacionGuia>
     */
    public function getObservacionesGuia(): Collection
    {
        return $this->observacionesGuia;
    }

    public function addObservacionGuia(ObservacionGuia $observacionGuia): self
    {
        if (!$this->observacionesGuia->contains($observacionGuia)) {
            $this->observacionesGuia[] = $observacionGuia;
            $comentario->setEvento($this);
        }

        return $this;
    }

    public function removeObservacionGuia(ObservacionGuia $observacionGuia): self
    {
        if ($this->observacionesGuia->removeElement($observacionGuia)) {
            // set the owning side to null (unless already changed)
            if ($observacionGuia->getEvento() === $this) {
                $observacionGuia->setEvento(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Imagenes>
     */
    public function getImagenes(): Collection
    {
        return $this->imagenes;
    }

    public function addImagen(Imagenes $imagen): self
    {
        if (!$this->imagenes->contains($imagen)) {
            $this->imagenes[] = $imagen;
            $imagen->setEvento($this);
        }

        return $this;
    }

    public function removeImagen(Imagenes $imagen): self
    {
        if ($this->imagenes->removeElement($imagen)) {
            // set the owning side to null (unless already changed)
            if ($imagen->getEvento() === $this) {
                $imagen->setEvento(null);
            }
        }

        return $this;
    }


    public function __toString()
    {
        if ($this->fecha_evento) {
            $formatter = new IntlDateFormatter('es_ES', IntlDateFormatter::LONG, IntlDateFormatter::NONE);
            $formatter->setPattern("EEEE, d MMMM ''yy");

            return $formatter->format($this->fecha_evento);
        }

        return '';
    }
}
