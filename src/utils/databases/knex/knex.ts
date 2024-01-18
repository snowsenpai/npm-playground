import knex from 'knex';
import knexConfig from './knexfile';


export const knexInstance = knex(knexConfig);