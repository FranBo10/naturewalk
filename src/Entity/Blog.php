<?php

namespace App\Entity;

use App\Repository\BlogRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BlogRepository::class)]
class Blog
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $titulo = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $descripcion_larga = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $descripcion_corta = null;

    #[ORM\Column]
    private ?bool $estado = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_registro = null;

    #[ORM\ManyToOne(inversedBy: 'blogs')]
    private ?BlogCategoria $categoria = null;

    #[ORM\Column(length: 255)]
    private ?string $imagen = null;

    #[ORM\ManyToMany(targetEntity: BlogEtiqueta::class, inversedBy: 'blogs')]
    private Collection $blogEtiquetas;

    public function __construct()
    {
        $this->blogEtiquetas = new ArrayCollection();
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

    public function isEstado(): ?bool
    {
        return $this->estado;
    }

    public function setEstado(bool $estado): static
    {
        $this->estado = $estado;

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

    public function getCategoria(): ?BlogCategoria
    {
        return $this->categoria;
    }

    public function setCategoria(?BlogCategoria $categoria): static
    {
        $this->categoria = $categoria;

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

    /**
     * @return Collection<int, BlogEtiqueta>
     */
    public function getBlogEtiquetas(): Collection
    {
        return $this->blogEtiquetas;
    }

    public function addBlogEtiqueta(BlogEtiqueta $blogEtiqueta): static
    {
        if (!$this->blogEtiquetas->contains($blogEtiqueta)) {
            $this->blogEtiquetas->add($blogEtiqueta);
        }

        return $this;
    }

    public function removeBlogEtiqueta(BlogEtiqueta $blogEtiqueta): static
    {
        $this->blogEtiquetas->removeElement($blogEtiqueta);

        return $this;
    }
}
