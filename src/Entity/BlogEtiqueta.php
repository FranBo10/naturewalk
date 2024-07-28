<?php

namespace App\Entity;

use App\Repository\BlogEtiquetaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BlogEtiquetaRepository::class)]
class BlogEtiqueta
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $titulo = null;

    #[ORM\ManyToMany(targetEntity: Blog::class, mappedBy: 'blogEtiquetas')]
    private Collection $blogs;

    public function __construct()
    {
        $this->blogs = new ArrayCollection();
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

    /**
     * @return Collection<int, Blog>
     */
    public function getBlogs(): Collection
    {
        return $this->blogs;
    }

    public function addBlog(Blog $blog): static
    {
        if (!$this->blogs->contains($blog)) {
            $this->blogs->add($blog);
        }

        return $this;
    }

    public function removeBlog(Blog $blog): static
    {
        $this->blogs->removeElement($blog);

        return $this;
    }

    public function __toString()
    {
        return $this->titulo;
    }
}
