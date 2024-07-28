<?php

namespace App\Repository;

use App\Entity\DetallesEvento;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<DetallesEvento>
 *
 * @method DetallesEvento|null find($id, $lockMode = null, $lockVersion = null)
 * @method DetallesEvento|null findOneBy(array $criteria, array $orderBy = null)
 * @method DetallesEvento[]    findAll()
 * @method DetallesEvento[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DetallesEventoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DetallesEvento::class);
    }

//    /**
//     * @return DetallesEvento[] Returns an array of DetallesEvento objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('d.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?DetallesEvento
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
