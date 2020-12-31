import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const UserDB = 'User';
@Schema()
export class UserModel extends mongoose.Document {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  admin: boolean;

}

export const UserSchema: mongoose.Schema = SchemaFactory.createForClass(UserModel)