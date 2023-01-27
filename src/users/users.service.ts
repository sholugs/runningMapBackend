import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { RegisterUserDto } from './dto/registerUser.dto';

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
    return this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async createUser(user: RegisterUserDto): Promise<UserEntity> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async updateUser(id: string, user: RegisterUserDto): Promise<void> {
    await this.userRepository.update(id, user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
