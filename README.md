<h1 align="center">Exercise drixit</h1>

## Links

- [Repo](https://github.com/yosuer/drixit-app "<project-name> Repo")


## Built With

- Node 16.14.2 & Yarn 1.22.19
- docker-compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)


## Installation

```bash
$ yarn install
```

## Running the local app

```bash
# up the infrastructure (mongo admin available on http://localhost:8081/)
$ docker-compose up -d

# copy api enviroment variables
$ cp packages/api/.env.example packages/api/.env

# copy webapp enviroment variables
$ cp packages/webapp/.env.example packages/webapp/.env

# run app api and webapp
$ yarn start
```

## Initialize

```bash
# create user
$ curl --request POST 'localhost:5001/api/v1/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "avatar":
      "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    "email": "it@drixit.com",
    "password": "password",
    "name": "Info",
    "surname": "Drixit",
    "age": 30,
    "role": "user"
}'

```

## Considerations
I'm using an architecture based on uses cases, each use case represents a feature in the app, doing this we can hold the small classes and easier to test and modify.

### ORM
In this exercise I'm using TypeORM, I like to take advantage of the fact that we are using Typescript and get typed objects from any operation over the database. Another good option could be using the Mongoose library.

### Dependecy Injection
For better managing of the dependencies, we could use libraries such as Awilix, Inversify, and TypeDI,
I prefer building my solutions from an OOP perspective working with classes instead of files with functions.

### Unit Test and Integration Test
Working with classes helps make testing easier, I made a unitary test example where you can see how we can mock the external dependencies using classes without the complexity of using jest.mock and having whole control over the mocks.

### Nest Framework (https://nestjs.com/)
I wanted to show you how I could make an app without a framework, but actually, I like using Nest Framework because using a framework we already have solved the typical boilerplate code, for example with this framework we already have a dependency injection solution or an easy way to document our API.
