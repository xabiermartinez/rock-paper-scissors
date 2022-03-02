const { Game } = require("../domain");

module.exports = ({ botMove, calculateResult }) => {
    return function ({ name, moveType }) {
        const game = new Game();
        game.addMove({ name, moveType });
        game.addMove(botMove());

        const moves = game.getMoves();
        const result = calculateResult(moves);

        game.setResult(result);

        return Object.freeze({ moves, result });
    };
};
