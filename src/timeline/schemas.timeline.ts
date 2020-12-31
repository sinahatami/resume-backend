import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

export const TimelineDB = 'Timeline'
@Schema()
export class TimelineModel extends mongoose.Document {

  @Prop()
  date: string

  @Prop()
  description: string
}

export const TimelineSchema: mongoose.Schema = SchemaFactory.createForClass(TimelineModel)
