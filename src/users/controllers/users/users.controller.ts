import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    const data = this.usersService.findAll();

    return data;
  }
}
