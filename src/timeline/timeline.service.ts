import { TimelineDB, TimelineModel } from './schemas.timeline'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class TimelineService {
  constructor(@InjectModel(TimelineDB) private readonly timelineModel: Model<TimelineModel>) {}
  get() {
    return this.timelineModel.find().sort({ year: 'ascending' })
  }

  async getOne(id) {
    return this.timelineModel.findById(id)
  }

  async create(body) {
    return this.timelineModel.create(body)
  }

  async update(id, body) {
    return this.timelineModel.findByIdAndUpdate(id, body).sort({ year: 'ascending' })
  }

  async delete(id) {
    return this.timelineModel.findByIdAndDelete(id).sort({ year: 'ascending' })
  }
}
