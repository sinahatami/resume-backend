import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ContactModule } from './contact/contact.module';
import { TimelineModule } from './timeline/timeline.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.CONNECTION_STRING.replace('<PASSWORD>', process.env.PASSWORD)
      , {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      }),
    BlogModule,
    AuthModule,
    UsersModule,
    ContactModule,
    TimelineModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
