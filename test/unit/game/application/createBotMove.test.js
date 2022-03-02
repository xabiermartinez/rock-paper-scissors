const { botMove } = require("../../../../src/game/application");

describe("botMove", function () {
    it("should return rock, paper or scissors", function () {
        const move = botMove();
        expect(["rock", "paper", "scissors"]).toContain(move);
    });
});
