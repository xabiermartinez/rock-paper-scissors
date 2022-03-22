const createGetGames = require("../../../../src/game/interfaces/createGetGames");
const createPlayGame = require("../../../../src/game/interfaces/createPlayGame");
const createInMemoryDb = require("../../../../src/game/infrastructure/createInMemoryDb");
const inMemoryDb = createInMemoryDb();

describe("getGames controller", function () {
    let getGames;
    beforeEach(function () {
        getGames = createGetGames({ inMemoryDb });
    });

    describe("before playing any game", function () {
        it("should return an empty list of games", async function () {
            const game = await getGames();
            expect(game.body).toEqual({ games: [] });
        });
    });

    describe("after playing a game", function () {
        beforeEach(async function () {
            const getRandomInt = () => 0;
            const playGame = createPlayGame({ getRandomInt, inMemoryDb });

            const httpRequest = {
                body: {
                    name: "Xabi",
                    move: "rock"
                }
            };
            await playGame(httpRequest);
        });
        it("should return correct list of games", async function () {
            const game = await getGames();
            expect(game.body.games.length).toBe(1);
        });
    });
});
