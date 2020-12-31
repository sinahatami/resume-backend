import { TimelineController } from './timeline.controller';
import { Module } from '@nestjs/common';
import { TimelineService } from './timeline.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TimelineSchema, TimelineDB } from './schemas.timeline';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TimelineDB, schema: TimelineSchema }]),
  ],
  controllers: [TimelineController],
  providers: [TimelineService]
})
export class TimelineModule {}
