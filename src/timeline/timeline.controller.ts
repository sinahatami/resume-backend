import { TimelineService } from './timeline.service';
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('timeline')
export class TimelineController {
  constructor(private timelineService: TimelineService) { }

  @Get()
  async getAll(): Promise<any> {
    return await this.timelineService.get()
  }

  @Post()
  async create(@Body() Body) {
    return await this.timelineService.create(Body)
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    return await this.timelineService.getOne(id)
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body) {
    return await this.timelineService.update(id, body)
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return await this.timelineService.delete(id)
  }

}
