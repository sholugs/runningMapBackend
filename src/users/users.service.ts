import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { RegisterUserDto } from './dto/registerUser.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findById(id: string): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createUser(user: RegisterUserDto): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = new UserEntity();
    newUser.name = user.name;
    newUser.surname = user.surname;
    newUser.username = user.username;
    newUser.email = user.email;
    newUser.password = hashedPassword;
    return this.userRepository.save(newUser);
  }

  async updateUser(id: string, user: RegisterUserDto) {
    return await this.userRepository.update(id, user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
