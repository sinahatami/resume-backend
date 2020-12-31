import { CommentService } from './comment.service'
import { Body, Delete, Get, Param, Post, UseGuards } from '@nestjs/common'
import { Controller } from '@nestjs/common'
import { CommentModel } from './schemas.comment'

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) { }

  @Get()
  async getAllComments() {
    return await this.commentService.getAllComments()
  }

  @Delete(':id')
  async deleteOne(@Param('id') id) {
    return await this.commentService.deleteOne(id)
  }

  @Post()
  async postComment(@Body() body: CommentModel) {
    let now = Date.now()
    body.publishDate = new Date(now).toUTCString()
    return await this.commentService.postComment(body)
  }

  @Get('byBlogId/:id')
  async getCommentByPostId(@Param() param) {
    return await this.commentService.getCommentByPostId(param.id)
  }

  @Post(':id/:status')
  async acceptRejectComment(@Param() param) {
    return await this.commentService.acceptRejectComment(param)
  }
}
