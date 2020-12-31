import { Injectable } from '@nestjs/common'
import { ContactModel, ContactDB } from './schemas.contact'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class ContactService {
  constructor(@InjectModel(ContactDB) private readonly contactModel: Model<ContactModel>) {}

  getAll() {
    return this.contactModel.find()
  }

  create(body) {
    return this.contactModel.create(body)
  }

  delete(id) {
    return this.contactModel.findByIdAndDelete(id)
  }
}
