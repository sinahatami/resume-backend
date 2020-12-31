import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const ContactDB = 'Contact';
@Schema()
export class ContactModel extends mongoose.Document {
  @Prop()
  name: string;

  @Prop()
  phone: number;

  @Prop()
  email: string;

  @Prop()
  subject: string;

  @Prop()
  comment: string;

}

export const ContactSchema: mongoose.Schema = SchemaFactory.createForClass(ContactModel);