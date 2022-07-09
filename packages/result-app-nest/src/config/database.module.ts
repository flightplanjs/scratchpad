import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataConfig } from 'result-app-db';
import { DataSource } from 'typeorm';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(dataConfig)],
})
export class DatabaseModule {
  constructor(private dataSource: DataSource) {}
}
