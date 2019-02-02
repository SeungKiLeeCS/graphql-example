# GraphQL Example

This is a simple GraphQL server for demonstration at HackSMU.

## Running the Project

This project uses [docker](https://docs.docker.com/). To run the project, run these commands.

1. `yarn docker:setup`
1. `yarn docker:start`

## About

### Project Structure

* `bin` - quality of life scripts for docker commands
* `db` - db access repository layer
* `graphql` - graphql schema and resolver definitions
* `knex` - migrations and seeds

### Key Libraries

This project uses a few key libraries that you should know about.

* [Apollo](https://www.apollographql.com/docs/apollo-server/) - A GraphQL framework for Node
* [Knex](https://knexjs.org/) - A sql query build that handles querying the database, migrations, and seeds

### Managing the DB

We use Knex for migrations and seeds.

To create a migration:
`yarn knex migrate:make <name_of_migration>`

To run migrations:
`yarn knex migrate:latest`

To roll back the DB:
`yarn knex migrate:rollback`

To create a new seed:
`yarn knex seed:make <name_of_seed>`

To run seeds:
`yarn knex seed:run`
