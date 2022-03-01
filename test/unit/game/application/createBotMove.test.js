const createBotMove = require("../../../../src/game/application/createBotMove");
const createGetRandomInt = require("../../../../src/game/application/createGetRandomInt");
const getRandomInt = createGetRandomInt();

const botMove = createBotMove({ getRandomInt });

describe("botMove", function () {
    it("should return rock, paper or scissors", function () {
        const move = botMove();
        expect(["rock", "paper", "scissors"]).toContain(move);
    });
});
