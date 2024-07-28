<?php

namespace App\Repository;

use App\Entity\Tour;
use App\Entity\Comentario;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Comentario>
 *
 * @method Comentario|null find($id, $lockMode = null, $lockVersion = null)
 * @method Comentario|null findOneBy(array $criteria, array $orderBy = null)
 * @method Comentario[]    findAll()
 * @method Comentario[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ComentarioRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Comentario::class);
    }

    public function findComentarios($value)
    {
        if ($value instanceof Tour) {
            $object = 'tour';
        }

        return $this->createQueryBuilder('c')
            ->andWhere('c.' . $object . '=:val')
            ->andWhere('c.isAprobado = true')
            ->setParameter('val', $value->getId())
            ->orderBy('c.id', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
