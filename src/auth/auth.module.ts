import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDB, UserSchema } from './schemas/schema.user';
import { JwtStrategy } from './strategies/jwt-auth.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserDB, schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
  controllers: [
    AuthController
  ],
})
export class AuthModule { }
