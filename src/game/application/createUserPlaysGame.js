const { Game, User } = require("../domain");

module.exports = ({ createBotMove, calculateResult, getRandomInt, inMemoryDb }) =>
    ({ name, move }) => {
        const user = new User({ name });
        const game = new Game();
        const playerMove = { name: user.getName(), move };
        const botMove = createBotMove({ getRandomInt });

        game.addMove(playerMove);
        game.addMove(botMove());

        const moves = game.getMoves();
        const result = calculateResult(moves);
        game.setResult(result);

        inMemoryDb.write({ moves, result });

        return Object.freeze({ moves, result });
    };
