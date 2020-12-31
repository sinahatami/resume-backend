import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) { }

    sendMail(mailto): void {
        console.log(mailto)
        this.mailerService.sendMail({
            from: process.env.OWNER_EMAIL_ADDRESS, // sender address OWNER_EMAIL_ADDRESS
            to: mailto, // list of receivers
            subject: 'About Contact To Sina Hatami ✔', // Subject line
            text: 'welcome', // plaintext body
            html: '<b>welcome</b>', // HTML body content
        })
            .then(() => {
                console.log(process.env.OWNER_EMAIL_ADDRESS)
            })
            .catch((e) => {
                console.log(e)
            });
    }

}