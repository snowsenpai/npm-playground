import knex from 'knex';
import knexConfig from './knexfile';

// TODO use dependency injection to create  knexInstance so db access can be mocked for tests
// TODO use env-vars to decide which knexConfig object should be used ['production' 'development' etc]
export const knexInstance = knex(knexConfig);