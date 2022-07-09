import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
export * from './entities';
import { User } from './entities';

export const dataConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT) ?? 5433,
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'postgres',
  database: process.env.DB_DATABASE ?? 'result-app',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ['migration/*.js'],
  subscribers: [],
};

export const AppDataSource = new DataSource(dataConfig);
