import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport, Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Injectable()
export class MailService {
  transport: Transporter<SMTPTransport.SentMessageInfo>;

  constructor(private configService: ConfigService) {
    this.transport = createTransport({
      host: this.configService.get('mail.host', 'localhost'),
      port: this.configService.get('mail.port', 1025),
      ignoreTLS: !this.configService.get<boolean>('mail.tls', false),
    });
  }

  send(mailOptions: Mail.Options) {
    return this.transport.sendMail(mailOptions);
  }
}
