# NPM-playground

For testing ideas, npm packages, and backend concepts.

## Migrations

### Create a migration

When creating a knex migration, pass the migration name like so:

```bash
npm run knex:migrate:make migration_name
```

### Run latest migrations

Note: This will run all migrations that have not been applied yet.

```bash
npm run knex:migrate:latest
```

It is recommended to run migrations before any data insert.
