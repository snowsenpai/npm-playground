require('ts-node/register');
require('dotenv/config');
import { Knex } from 'knex';

console.log('process.env.POSTGRES_PASSWORD', process.env.POSTGRES_PASSWORD);
const knexConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_HOSTNAME,
    port: +process.env.POSTGRES_PORT!,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  },
  pool: {
    min: +process.env.POSTGRES_POOL_MIN!,
    max: +process.env.POSTGRES_POOL_MAX!,
  },
  migrations: {
    extension: 'ts',
    directory: 'migrations',
    tableName: 'migrations_history',
  },
  seeds: {
    extension: 'ts',
    directory: 'seeds',
  }
}
export default knexConfig;