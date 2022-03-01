.PHONY: test dev shell

SERVICE := $(shell node -p "require('./package.json').name")

DOCKER_CONTAINER_ID := $(shell docker ps -qaf 'ancestor=${SERVICE}:latest')

test:
	@ echo "Building image and running tests..."
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 ENV="test" COMMAND="npm test" docker-compose -f docker-compose.yml up --exit-code-from ${SERVICE}

dev:
	@ echo "Mounting dev environment..."
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 ENV="development" COMMAND="npx nodemon src/index.js" docker-compose -f docker-compose.yml up

shell:
	@ echo "Entering ${SERVICE} container"
	@ echo "${DOCKER_CONTAINER_ID}"
	docker exec -it ${DOCKER_CONTAINER_ID} /bin/sh
