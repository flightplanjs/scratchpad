import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  host: process.env.MAIL_HOST ?? 'localhost',
  port: process.env.MAIL_PORT ?? 1025,
  ignoreTLS: process.env.MAIL_TLS ?? false,
}));
