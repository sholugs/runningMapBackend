import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from '../entities/user.entity';
import { RegisterUserDto } from './dto/registerUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param() id: string) {
    return this.usersService.findById(id);
  }

  @Post()
  async create(@Body() user: RegisterUserDto) {
    return this.usersService.createUser(user);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: RegisterUserDto) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  async delete(@Param() id: string) {
    return this.usersService.deleteUser(id);
  }
}
