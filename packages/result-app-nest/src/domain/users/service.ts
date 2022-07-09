import { Module, Controller, Get, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'result-app-db';
import { Repository } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  @Get()
  public async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  @Post()
  public createUser(@Body() user: User): User {
    console.log(user);

    return user;
  }
}

@Module({
  controllers: [UsersController],
  providers: [],
})
export class UsersService {}
