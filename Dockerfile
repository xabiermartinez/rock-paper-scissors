FROM node:14-alpine

WORKDIR /app/

ADD package.json .
RUN --mount=type=ssh npm i

RUN chown -R node $PWD

ADD src ./src/
ADD test ./test/
ADD src/index.js ./index.js
ADD .eslintrc.json .
