const createGame = require("../../../../src/game/domain/createGame");
const Game = createGame();

describe("Game", function () {
    let game;
    beforeEach(function () {
        game = new Game();
    });

    it("should return an object", function () {
        expect(typeof game).toBe("object");
    });

    describe("getMoves/addMove", function () {
        describe("without previous interaction", function () {
            it("should return empty array", function () {
                expect(game.getMoves()).toStrictEqual([]);
            });
        });

        describe("with moves set", function () {
            const move = { name: "Ponky", move: "rock" };
            beforeEach(function () {
                game.addMove(move);
            });

            it("should return moves array", function () {
                expect(game.getMoves()).toStrictEqual([move]);
            });
        });
    });

    describe("getResult/setResult", function () {
        describe("without previous interaction", function () {
            it("should return empty array", function () {
                expect(game.getResult()).toStrictEqual([]);
            });
        });

        describe("with result set", function () {
            let result;
            beforeEach(function () {
                result = { tie: false, winner : "Ponky" };
                game.setResult(result);
            });

            it("should return result object", function () {
                expect(game.getResult()).toStrictEqual(result);
            });
        });
    });
});
