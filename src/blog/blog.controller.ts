import { BlogService } from './blog.service';
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) { }

  @Get('pagination/:pageIndex/:resultsPerPage')
  async getByPagination(@Param() param): Promise<any> {
    return await this.blogService.getByPagination(+param.pageIndex, +param.resultsPerPage)
  }

  @Get()
  async getAll(): Promise<any> {
    return await this.blogService.get()
  }

  @Post()
  async create(@Body() Body) {
    return await this.blogService.create(Body)
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    return await this.blogService.getOne(id)
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body) {
    return await this.blogService.update(id, body)
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return await this.blogService.delete(id)
  }
}
