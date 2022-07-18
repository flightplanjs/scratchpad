import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './domain/user/user.module';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    DatabaseModule,
    UserModule,
  ],
})
export class AppModule {}
