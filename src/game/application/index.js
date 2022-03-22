const createBotMove = require("./createBotMove");
const createCalculateResult = require("./createCalculateResult");
const createGetRandomInt = require("./createGetRandomInt");
const createUserPlaysGame = require("./createUserPlaysGame");

const createInMemoryDb = require("../infrastructure/createInMemoryDb");
const inMemoryDb = createInMemoryDb();

const calculateResult = createCalculateResult();
const getRandomInt = createGetRandomInt();
const botMove = createBotMove({ getRandomInt });
const userPlaysGame = createUserPlaysGame({ createBotMove, calculateResult, getRandomInt, inMemoryDb });

module.exports = { botMove, calculateResult, getRandomInt, userPlaysGame };
