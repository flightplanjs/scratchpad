import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';

import { UsersService } from '../domain/users/service';

@Module({
  imports: [DatabaseModule, UsersService],
})
export class AppModule {}
