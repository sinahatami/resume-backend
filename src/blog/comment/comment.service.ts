import { CommentDB, CommentModel } from './schemas.comment'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Mongoose } from 'mongoose'

@Injectable()
export class CommentService {
  constructor(@InjectModel(CommentDB) private readonly commentModel: Model<CommentModel>) { }

  async getAllComments() {
    return await this.commentModel.find().populate('userId', '-password')
  }

  deleteOne(id) {
    return this.commentModel.findByIdAndDelete(id)
  }

  postComment(body) {
    return this.commentModel.create(body)
  }

  getCommentByPostId(id) {
    return this.commentModel.find({ blogId: id, status: true }).populate('userId')
  }

  acceptRejectComment(param) {
    return this.commentModel.updateOne({ _id: param.id }, { $set: { status: param.status } })
  }
}
