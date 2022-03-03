const createUserPlaysGame = require("../../../src/game/application/createUserPlaysGame");
const createBotMove = require("../../../src/game/application/createBotMove");
const createCalculateResult = require("../../../src/game/application/createCalculateResult");

module.exports = ({ getRandomInt }) =>
    async (httpRequest) => {
        let body, statusCode;

        const headers = { "Content-Type": "application/json" };

        try {
            const calculateResult = createCalculateResult();
            const userPlaysGame = createUserPlaysGame({ createBotMove, calculateResult, getRandomInt });
            body = userPlaysGame({
                name: httpRequest.body.name,
                move: httpRequest.body.move
            });
            statusCode = 200;
        } catch (e) {
            body = { error: e.message };
            statusCode = 500;
        }

        return { headers, statusCode, body };
    };
