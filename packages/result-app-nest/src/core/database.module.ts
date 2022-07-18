import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataConfig } from 'result-app-db';
import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config: DataSourceOptions = {
          // Import base config, entities, etc
          ...dataConfig,

          type: 'postgres',
          host: configService.get<string>('database.host'),
          port: configService.get<number>('database.port'),
          username: configService.get<string>('database.username'),
          password: configService.get<string>('database.password'),
          database: configService.get<string>('database.database'),
          synchronize: true,
          logging: false,
        };

        return config;
      },
    }),
  ],
})
export class DatabaseModule {
  constructor(private dataSource: DataSource) {}
}
