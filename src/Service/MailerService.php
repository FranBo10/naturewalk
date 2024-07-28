<?php

namespace App\Service;

use Symfony\Component\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;

class MailerService
{

    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function send($to, $subject, $templateTwig, $context): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address('reserva@freetourgo.com', 'Reserva'))
            ->to($to)
            ->subject($subject)
            ->htmlTemplate("mails/$templateTwig")
            ->context($context);

        try {
            $this->mailer->send($email);
        } catch (TransportExceptionInterface $transportException) {
            throw $transportException;
        }
    }
}
