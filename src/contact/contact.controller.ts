import { ContactService } from './contact.service'
import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common'
import { ContactModel } from './schemas.contact'
import { MailService } from './Mail.service'

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService, private mailService: MailService) {}

  @Get()
  async get() {
    return await this.contactService.getAll()
  }

  @Post()
  async create(@Body() body: ContactModel) {
    this.contactService.create(body)
    try {
      await this.mailService.sendMail(body.email)
    } catch (error) {
      console.log(error)
    }
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return await this.contactService.delete(id)
  }
}
