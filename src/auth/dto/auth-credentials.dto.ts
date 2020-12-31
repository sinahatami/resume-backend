import { IsEmail, IsString, MaxLength, MinLength, Validate } from 'class-validator'

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string

  @IsString()
  @MinLength(4, { message: 'Password is too short (4 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  password: string

  @IsString()
  @MinLength(4)
  @IsEmail()
  email: string

  admin: boolean
}
