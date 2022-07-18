import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
export * from './entities';

export const dataConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT) ?? 5433,
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'postgres',
  database: process.env.DB_DATABASE ?? 'result-app',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/entity/**/*{.ts,.js}'],
  migrations: ['migration/*.js'],
  subscribers: [],
};

export const getDataSource = () => new DataSource(dataConfig);
