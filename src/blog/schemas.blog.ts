import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

export const BlogDB = 'Blog'
@Schema()
export class BlogModel extends mongoose.Document {
  @Prop()
  title: string

  @Prop()
  description: string

  @Prop()
  image: { data: Buffer; contentType: string }

  @Prop()
  publishDate: string

  @Prop()
  status: boolean
}

export const BlogSchema: mongoose.Schema = SchemaFactory.createForClass(BlogModel)
