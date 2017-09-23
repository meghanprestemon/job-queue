## Challenge

Create a job queue whose workers fetch data from a URL and store the results in a database. The job queue should expose a REST API for adding jobs and checking their status / results.

## Prerequisites

Ensure you have Docker installed. If you need to install it you can get started [here](https://www.docker.com/community-edition).

## Installation

1. Fork and clone this repository
2. Choose the environment you'd like to run:
    * **NODE_ENV=test** The test environment uses a test database that gets cleared and re-populated each time it is run. This environment automatically runs all tests when the container starts running. When the tests are complete, the container stops running.
    * **NODE_ENV=dev** The dev environment uses a separate dev database that allows data to be persisted over new container runtimes. This environment runs the `nodemon` command which keeps the container running and listening for updates to the codebase.
  
  *You can find more information on creating separate testing and development environments in Docker in my [LinkedIn article](https://www.linkedin.com/pulse/how-set-up-separate-test-development-databases-docker-prestemon-2).*
  
3. Run the command `NODE_ENV=<env> docker-compose up`

## Running the tests

To run the tests use the command `NODE_ENV=test docker-compose up`. You should see the following results:

![picture alt](https://user-images.githubusercontent.com/24230076/30777846-5f17e410-a079-11e7-912a-5f01d0d3be97.png "test results in terminal")

## Built With

* [Docker](https://docs.docker.com/) - environment containerization
* [Express](https://expressjs.com/) - Node.js framework
* [PostgreSQL](https://www.postgresql.org/) - relational database management system (DBMS)
* [Knex.js](http://knexjs.org/) - SQL query builder (used in conjunction with PostgreSQL)
* [Mocha](https://mochajs.org/) - test framework
* [Chai](http://chaijs.com/) - assertion library for testing
* [ESLint](https://eslint.org/docs/rules/) - Javascript linting utility

## Author

* [**Meghan Prestemon**](https://github.com/meghanprestemon)
