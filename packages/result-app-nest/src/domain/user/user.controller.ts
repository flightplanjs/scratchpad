import { Controller, Get, Post, Body, Inject, Module } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'result-app-db';
import { Repository } from 'typeorm';
import { MailService } from '../../config/mail.service';

@Controller('users')
@Module({
  // imports: [MailService],
})
export class UserController {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private mail: MailService,
  ) {}

  @Get()
  public async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  @Post()
  public async createUser(@Body() input: User): Promise<User> {
    const user = this.userRepository.create(input);

    await this.mail.send({
      to: input.email,
      from: 'ryan.tablada+test@gmail.com',
      subject: 'Welcome',
      text: 'Thanks for creating an account!',
    });

    await this.userRepository.save(user);

    return user;
  }
}
