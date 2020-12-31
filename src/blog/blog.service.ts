import { BlogDB, BlogModel } from './schemas.blog'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class BlogService {
  constructor(@InjectModel(BlogDB) private readonly blogModel: Model<BlogModel>) { }
  get() {
    return this.blogModel.find({}, { image: 0 })
  }

  getByPagination(pageIndex: number, resultsPerPage: number) {
    return this.blogModel
      .find({ status: { $eq: true } })
      .limit(resultsPerPage)
      .skip(resultsPerPage * pageIndex)
  }

  async getOne(id) {
    return this.blogModel.findById(id, { comment: 0 })
  }

  async create(body) {
    return this.blogModel.create(body)
  }

  async update(id, body) {
    return this.blogModel.findByIdAndUpdate(id, body)
  }

  async delete(id) {
    return this.blogModel.findByIdAndDelete(id)
  }
}
