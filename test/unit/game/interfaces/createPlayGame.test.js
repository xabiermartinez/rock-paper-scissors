const createPlayGame = require("../../../../src/game/interfaces/createPlayGame");

describe("playGame controller", function () {
    let httpRequest, getRandomInt, playGame;
    beforeEach(function () {
        getRandomInt = () => 0;
        playGame = createPlayGame({ getRandomInt });
    });

    describe("tie", function () {
        beforeEach(function () {
            httpRequest = {
                body: {
                    name: "Xabi",
                    move: "rock"
                }
            };
        });
        it("should succesfully play a game", async function () {
            const result = {
                moves: [
                    { name: "Xabi", move: "rock" },
                    { name: "Bot", move: "rock" },
                ],
                result: {
                    tie: true,
                    winner: "none"
                }
            };

            const game = await playGame(httpRequest);
            expect(game.body).toEqual(result);
        });
    });

    describe("player wins", function () {
        beforeEach(function () {
            httpRequest = {
                body: {
                    name: "Xabi",
                    move: "paper"
                }
            };
        });
        it("should succesfully play a game", async function () {
            const result = {
                moves: [
                    { name: "Xabi", move: "paper" },
                    { name: "Bot", move: "rock" },
                ],
                result: {
                    tie: false,
                    winner: "Xabi"
                }
            };

            const game = await playGame(httpRequest);
            expect(game.body).toEqual(result);
        });
    });

    describe("Bot wins", function () {
        beforeEach(function () {
            httpRequest = {
                body: {
                    name: "Xabi",
                    move: "scissors"
                }
            };
        });
        it("should succesfully play a game", async function () {
            const result = {
                moves: [
                    { name: "Xabi", move: "scissors" },
                    { name: "Bot", move: "rock" },
                ],
                result: {
                    tie: false,
                    winner: "Bot"
                }
            };

            const game = await playGame(httpRequest);
            expect(game.body).toEqual(result);
        });
    });
});
