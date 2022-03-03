# Rock-Paper-Scissors game

This repository is focused in DDD and clean architecture. 
Looking for decouple as much dependencies as possible.

Tests are done with TDD methodology and a high coverage (> 90%).

## How to run

* `make dev` from project root

This will run a docker container, receiving requests at `http://localhost:3000`.

Take a look at the [Endpoints](#endpoints) section for details.

## Run tests

* `make test` to run inside the docker container
* `npm run test` to run in local

## Endpoints

- `POST` http://localhost:3000/api/play

You send a move in the body, so the game makes its move and resolves. Body format is:
```json
{
    "name": "Xabi",
    "move": "rock"
}
