<?php

namespace App\Repository;

use App\Entity\ObservacionGuia;
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
class ObservacionGuiaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ObservacionGuia::class);
    }

   public function findObservacionesGuia($value)
    {
        if ($value instanceof Evento) {
            $object = 'Evento';
        }

        return $this->createQueryBuilder('c')
            ->andWhere('c.' . $object . '=:val')
            ->setParameter('val', $value->getId())
            ->orderBy('c.id', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
