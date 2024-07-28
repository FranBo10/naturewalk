<?php

namespace App\Repository;

use App\Entity\Rango;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Rango>
 *
 * @method Rango|null find($id, $lockMode = null, $lockVersion = null)
 * @method Rango|null findOneBy(array $criteria, array $orderBy = null)
 * @method Rango[]    findAll()
 * @method Rango[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RangoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Rango::class);
    }

//    /**
//     * @return Rango[] Returns an array of Rango objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Rango
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
