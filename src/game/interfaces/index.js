const createPlayGame = require("./createPlayGame");
const { getRandomInt } = require("../application");

const playGame = createPlayGame({ getRandomInt });

module.exports = { playGame };
