const createPlayGame = require("./createPlayGame");
const createGetGames = require("./createGetGames");
const { getRandomInt } = require("../application");

const createInMemoryDb = require("../infrastructure/createInMemoryDb");
const inMemoryDb = createInMemoryDb();

const playGame = createPlayGame({ getRandomInt, inMemoryDb });
const getGames = createGetGames({ inMemoryDb });

module.exports = { playGame, getGames };
