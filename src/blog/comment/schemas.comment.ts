import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

export const CommentDB = 'Comment'
@Schema()
export class CommentModel extends mongoose.Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Blog" })
  blogId

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId

  @Prop()
  title: string

  @Prop()
  description: string

  @Prop()
  publishDate: string

  @Prop()
  status: boolean
}

export const CommentSchema: mongoose.Schema = SchemaFactory.createForClass(CommentModel)
