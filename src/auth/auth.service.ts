import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcrypt'
import { Model } from 'mongoose'

import { AuthCredentialsDto } from './dto/auth-credentials.dto'
import { User } from './interfaces/user.interface'

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>, private jwtService: JwtService) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<any> {
    authCredentialsDto.password = await bcrypt.hash(authCredentialsDto.password, 12)
    return this.userModel.create(authCredentialsDto)
  }

  async signIn(user: User) {
    const payload = { username: user.username, id: user._id }
    const correntUser = { username: user.username, id: user._id, email: user.email, admin: user.admin }
    return {
      id: correntUser.id,
      admin: correntUser.admin,
      username: correntUser.username,
      email: correntUser.email,
      token: this.jwtService.sign(payload),
    }
  }

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userModel.findOne({ username })

    if (!user) {
      return null
    }

    const valid = await bcrypt.compare(pass, user.password)

    if (valid) {
      return user
    }

    return null
  }
}
