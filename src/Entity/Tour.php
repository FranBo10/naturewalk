<?php

namespace App\Entity;

use App\Entity\Horario;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\TourRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: TourRepository::class)]
class Tour
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $titulo = null;

    #[ORM\Column(length: 255)]
    private ?string $imagen = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $descripcion_larga = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $descripcion_corta = null;

    #[ORM\Column]
    private ?float $precio = null;

    #[ORM\Column]
    private ?bool $estado = null;

    #[ORM\Column]
    private ?int $orden = null;

    #[ORM\Column]
    private ?int $stock = null;

    #[ORM\ManyToMany(targetEntity: Reserva::class, mappedBy: 'tours')]
    private Collection $reservas;

    #[ORM\OneToMany(mappedBy: 'tour', targetEntity: Slider::class)]
    private Collection $sliders;

    #[ORM\OneToMany(mappedBy: 'tour', targetEntity: Evento::class)]
    private Collection $eventos;

    #[ORM\Column(type: 'time')]
    private ?\DateTimeInterface $hora_inicio = null;

    #[ORM\Column(type: 'time')]
    private ?\DateTimeInterface $hora_fin = null;

    #[ORM\Column(length: 50)]
    private ?string $comienzo = null;

    #[ORM\Column(length: 50)]
    private ?string $final = null;

    #[ORM\Column(length: 80)]
    private ?string $rango = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $mapaComienzo = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $mapaFinal = null;

    #[ORM\OneToMany(mappedBy: 'tour', targetEntity: Comentario::class, orphanRemoval: true)]
    private Collection $comentarios;

    #[ORM\ManyToMany(targetEntity: Horario::class, mappedBy: 'tours')]
    private Collection $horarios;

    public function __construct()
    {
        $this->reservas = new ArrayCollection();
        $this->horarios = new ArrayCollection();
        $this->sliders = new ArrayCollection();
        $this->eventos = new ArrayCollection();
        $this->comentarios = new ArrayCollection();
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

    public function getImagen(): ?string
    {
        return $this->imagen;
    }

    public function setImagen(string $imagen): static
    {
        $this->imagen = $imagen;

        return $this;
    }

    public function getDescripcionLarga(): ?string
    {
        return $this->descripcion_larga;
    }

    public function setDescripcionLarga(string $descripcion_larga): static
    {
        $this->descripcion_larga = $descripcion_larga;

        return $this;
    }

    public function getDescripcionCorta(): ?string
    {
        return $this->descripcion_corta;
    }

    public function setDescripcionCorta(string $descripcion_corta): static
    {
        $this->descripcion_corta = $descripcion_corta;

        return $this;
    }

    public function getPrecio(): ?float
    {
        return $this->precio;
    }

    public function setPrecio(float $precio): static
    {
        $this->precio = $precio;

        return $this;
    }

    public function isEstado(): ?bool
    {
        return $this->estado;
    }

    public function setEstado(bool $estado): static
    {
        $this->estado = $estado;

        return $this;
    }


    public function getOrden(): ?int
    {
        return $this->orden;
    }

    public function setOrden(int $orden): static
    {
        $this->orden = $orden;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): static
    {
        $this->stock = $stock;

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
            $reserva->addTour($this);
        }

        return $this;
    }

    public function removeReserva(Reserva $reserva): static
    {
        if ($this->reservas->removeElement($reserva)) {
            $reserva->removeTour($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Horario>
     */
    public function getHorarios(): Collection
    {
        return $this->horarios;
    }

    public function addHorario(Horario $horario): static
    {
        if (!$this->horarios->contains($horario)) {
            $this->horarios->add($horario);
            $horario->addTour($this);
        }

        return $this;
    }

    public function removeHorario(Horario $horario): static
    {
        if ($this->horarios->removeElement($horario)) {
            $horario->removeTour($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Slider>
     */
    public function getSliders(): Collection
    {
        return $this->sliders;
    }

    public function addSlider(Slider $slider): static
    {
        if (!$this->sliders->contains($slider)) {
            $this->sliders->add($slider);
            $slider->setTour($this);
        }

        return $this;
    }

    public function removeSlider(Slider $slider): static
    {
        if ($this->sliders->removeElement($slider)) {
            // set the owning side to null (unless already changed)
            if ($slider->getTour() === $this) {
                $slider->setTour(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Evento>
     */
    public function getEventos(): Collection
    {
        return $this->eventos;
    }

    public function addEvento(Evento $evento): static
    {
        if (!$this->eventos->contains($evento)) {
            $this->eventos->add($evento);
            $evento->setTour($this);
        }

        return $this;
    }

    public function removeEvento(Evento $evento): static
    {
        if ($this->eventos->removeElement($evento)) {
            // set the owning side to null (unless already changed)
            if ($evento->getTour() === $this) {
                $evento->setTour(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->titulo;
    }

    public function getHoraInicio(): ?\DateTimeInterface
    {
        return $this->hora_inicio;
    }

    public function setHoraInicio(\DateTimeInterface $hora_inicio): static
    {
        $this->hora_inicio = $hora_inicio;

        return $this;
    }

    public function getHoraFin(): ?\DateTimeInterface
    {
        return $this->hora_fin;
    }

    public function setHoraFin(\DateTimeInterface $hora_fin): static
    {
        $this->hora_fin = $hora_fin;

        return $this;
    }

    public function getComienzo(): ?string
    {
        return $this->comienzo;
    }

    public function setComienzo(string $comienzo): static
    {
        $this->comienzo = $comienzo;

        return $this;
    }

    public function getFinal(): ?string
    {
        return $this->final;
    }

    public function setFinal(string $final): static
    {
        $this->final = $final;

        return $this;
    }

    public function getRango(): ?string
    {
        return $this->rango;
    }

    public function setRango($hora_inicio, $hora_fin): static
    {
        $this->rango = $hora_inicio->format("H") . ' - ' . $hora_fin->format("H");

        return $this;
    }

    public function getMapaComienzo(): ?string
    {
        return $this->mapaComienzo;
    }

    public function setMapaComienzo(string $mapaComienzo): static
    {
        $this->mapaComienzo = $mapaComienzo;

        return $this;
    }

    public function getMapaFinal(): ?string
    {
        return $this->mapaFinal;
    }

    public function setMapaFinal(string $mapaFinal): static
    {
        $this->mapaFinal = $mapaFinal;

        return $this;
    }



    /**
     * @return Collection<int, Comentario>
     */
    public function getComentarios(): Collection
    {
        return $this->comentarios;
    }

    public function addComentario(Comentario $comentario): self
    {
        if (!$this->comentarios->contains($comentario)) {
            $this->comentarios[] = $comentario;
            $comentario->setTour($this);
        }

        return $this;
    }

    public function removeComentario(Comentario $comentario): self
    {
        if ($this->comentarios->removeElement($comentario)) {
            // set the owning side to null (unless already changed)
            if ($comentario->getTour() === $this) {
                $comentario->setTour(null);
            }
        }

        return $this;
    }
}
