<?php

namespace App\Command;

use App\Service\ContactoService;
use Symfony\Component\Mime\Email;
use App\Repository\UserRepository;
use Symfony\Component\Mime\Address;
use App\Repository\ContactoRepository;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'app:send-contact',
    description: 'Envía mensajes de contacto pendientes',
)]
class SendContactCommand extends Command
{
    private $contactRepository;
    private $mailer;
    private $cs;
    private $userRepository;

    public function __construct(ContactoRepository $contactRepository, MailerInterface $mailer, ContactoService $cs, UserRepository $userRepository)
    {
        $this->contactRepository = $contactRepository;
        $this->mailer = $mailer;
        $this->cs = $cs;
        $this->userRepository = $userRepository;

        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $toSend = $this->contactRepository->findBy(['isSend' => false]);
        $client = $this->userRepository->getCliente();
        $address = new Address($this->userRepository->getCliente()->getEmail(), $this->userRepository->getCliente()->getNombre());

        if ($client) {
            $address = new Address($client->getEmail(), $client->getNombre());
        } else {
            // Handle the case when the client is null (e.g., provide a default email and name)
            $address = new Address('default@example.com', 'Default Name');
        }

        foreach ($toSend as $mail) {
            $email = (new Email())
                ->from($mail->getEmail())
                ->to($address)
                ->subject('Nuevo mensaje de ' . $mail->getNombre())
                ->text($mail->getMensaje());

            $this->mailer->send($email);
            $this->cs->isSend($mail);
        }

        return Command::SUCCESS;
    }
}
