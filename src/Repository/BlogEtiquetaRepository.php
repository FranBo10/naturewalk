<?php

namespace App\Repository;

use App\Entity\BlogEtiqueta;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<BlogEtiqueta>
 *
 * @method BlogEtiqueta|null find($id, $lockMode = null, $lockVersion = null)
 * @method BlogEtiqueta|null findOneBy(array $criteria, array $orderBy = null)
 * @method BlogEtiqueta[]    findAll()
 * @method BlogEtiqueta[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlogEtiquetaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BlogEtiqueta::class);
    }

//    /**
//     * @return BlogEtiqueta[] Returns an array of BlogEtiqueta objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('b.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?BlogEtiqueta
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
