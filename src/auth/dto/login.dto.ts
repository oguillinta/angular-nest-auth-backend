import { IsEmail, MinLength } from 'class-validator';

export class LogindDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
