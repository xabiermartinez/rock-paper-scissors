const { userPlaysGame } = require("../../../../src/game/application");

describe("UserPlaysGame", function () {
    let move;
    beforeEach(function () {
        move = { name: "Xabi", moveType: "rock" };
    });

    it("should return a game", function () {
        const playedGame = userPlaysGame(move);
        expect(playedGame).toHaveProperty("moves");
        expect(playedGame).toHaveProperty("result");
    });
});
