import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactDB, ContactSchema } from './schemas.contact';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './Mail.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ContactDB, schema: ContactSchema }]),
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        host: 'localhost',
        port: 3000,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: process.env.OWNER_EMAIL_ADDRESS,
          pass: process.env.OWNER_EMAIL_PASSWORD,
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
    }),
  ],
  providers: [
    ContactService,
    MailService
  ],
  controllers: [ContactController]
})
export class ContactModule { }
