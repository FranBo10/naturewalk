<?php

namespace App\Repository;

use App\Entity\BlogCategoria;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<BlogCategoria>
 *
 * @method BlogCategoria|null find($id, $lockMode = null, $lockVersion = null)
 * @method BlogCategoria|null findOneBy(array $criteria, array $orderBy = null)
 * @method BlogCategoria[]    findAll()
 * @method BlogCategoria[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlogCategoriaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BlogCategoria::class);
    }

//    /**
//     * @return BlogCategoria[] Returns an array of BlogCategoria objects
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

//    public function findOneBySomeField($value): ?BlogCategoria
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
