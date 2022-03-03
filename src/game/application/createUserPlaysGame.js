const { Game } = require("../domain");

module.exports = ({ createBotMove, calculateResult, getRandomInt }) => {
    return function ({ name, move }) {
        const game = new Game();
        const botMove = createBotMove({ getRandomInt });
        game.addMove({ name, move });
        game.addMove(botMove());

        const moves = game.getMoves();
        const result = calculateResult(moves);
        game.setResult(result);

        return Object.freeze({ moves, result });
    };
};
