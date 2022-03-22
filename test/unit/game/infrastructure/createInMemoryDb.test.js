const createInMemoryDb = require("../../../../src/game/infrastructure/createInMemoryDb");
const inMemoryDb = createInMemoryDb();

describe("inMemoryDb", function () {
    let game;

    beforeEach(function () {
        inMemoryDb.clean();

        game = {
            moves: [
                { name: "Xabi", move: "scissors" },
                { name: "Bot", move: "rock" },
            ],
            result: {
                tie: false,
                winner: "Bot"
            }
        };
    });

    describe("write", function () {
        it("should persist the game", function () {
            const games = inMemoryDb.write(game);
            expect(games.length).toBe(1);
        });
    });

    describe("clean", function () {
        beforeEach(function () {
            inMemoryDb.write(game);
        });
        it("should clean all games", function () {
            inMemoryDb.clean();
            const games = inMemoryDb.read();
            expect(games).toEqual([]);
        });
    });

    describe("read", function () {
        beforeEach(function () {
            inMemoryDb.write(game);
        });
        it("should return correct list of games", function () {
            const games = inMemoryDb.read();
            expect(games.length).toEqual(1);
        });
    });
});
