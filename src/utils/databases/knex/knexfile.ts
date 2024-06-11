import { Knex } from 'knex';

const knexConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.PG_HOSTNAME,
    port: +process.env.PG_PORT!,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
  pool: {
    min: +process.env.PG_POOL_MIN!,
    max: +process.env.PG_POOL_MAX!,
  },
  migrations: {
    extension: 'ts',
    directory: 'migrations',
    tableName: 'migrations_history',
  },
  seeds: {
    extension: 'ts',
    directory: 'seeds',
  },
};
export default knexConfig;
