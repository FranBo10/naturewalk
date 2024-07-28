<?php

namespace App\Security;

use App\Entity\User;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException;

class UserConfirmation implements UserCheckerInterface
{
    public function checkPreAuth(UserInterface $user): void
    {
        if (!$user instanceof User) {
            return;
        }
    }

    public function checkPostAuth(UserInterface $user): void
    {
        if (!$user instanceof User) {
            return;
        }

        if ($user->isVerified() === false) {
            throw new CustomUserMessageAccountStatusException("Su cuenta no ha podido ser verificada, por favor confirme antes del {$user->getTokenLifeTime()->format('d/m/y - H\hi')}");
        }
    }
}
