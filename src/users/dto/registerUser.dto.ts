import { IsString, IsNotEmpty, IsEmail, IsUUID } from 'class-validator';
import { v4 } from 'uuid';

export class RegisterUserDto {

  constructor(name: string, surname: string, username: string, email: string, password: string) {
    this.id = v4();
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.email = email;
    this.password = password;
  }
  
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
