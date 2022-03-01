const createGame = require("./createGame");
const createUser = require("./createUser");

const Game = createGame();
const User = createUser();

module.exports = { Game, User };
