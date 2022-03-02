const createBotMove = require("./createBotMove");
const createCalculateResult = require("./createCalculateResult");
const createGetRandomInt = require("./createGetRandomInt");
const createUserPlaysGame = require("./createUserPlaysGame");

const calculateResult = createCalculateResult();
const getRandomInt = createGetRandomInt();
const botMove = createBotMove({ getRandomInt });
const userPlaysGame = createUserPlaysGame({ botMove, calculateResult });

module.exports = { botMove, calculateResult, getRandomInt, userPlaysGame };
