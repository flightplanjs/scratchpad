import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'result-app-db';
import { Repository } from 'typeorm';

@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  @Get()
  public async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  @Post()
  public async createUser(@Body() input: User): Promise<User> {
    const user = this.userRepository.create(input);

    await this.userRepository.save(user);

    return user;
  }
}
