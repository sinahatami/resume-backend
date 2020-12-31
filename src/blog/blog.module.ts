import { UserSchema, UserDB } from './../auth/schemas/schema.user';
import { CommentController } from './comment/comment.controller';
import { CommentDB, CommentSchema } from './comment/schemas.comment'
import { CommentService } from './comment/comment.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { BlogController } from './blog.controller'
import { BlogService } from './blog.service'
import { BlogSchema, BlogDB } from './schemas.blog'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BlogDB, schema: BlogSchema },
      { name: CommentDB, schema: CommentSchema },
      { name: UserDB, schema: UserSchema },
    ]),
  ],
  controllers: [BlogController, CommentController],
  providers: [BlogService, CommentService],
})
export class BlogModule {}
