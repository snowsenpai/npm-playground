import knex from 'knex';
import knexConfig from './knexfile';


export const knexPg = knex(knexConfig);