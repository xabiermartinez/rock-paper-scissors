# Rock-Paper-Scissors game

This repository is focused in DDD and clean 
architecture. The test are done with TDD methodology.

## How to run

* `make dev` from project root

This will run a docker container, receiving requests at `http://localhost:3000`.

## Run tests

* `make test`

## Endpoints

- `POST` http://localhost:3000/api/play

Body Format:
```json
{
    "name": "Xabi",
    "move": "rock"
}
