const { getRandomInt } = require("../../../../src/game/application");

describe("randomInt", function () {
    it("should return an number", function () {
        const randomInt = getRandomInt(2);
        expect(typeof randomInt).toBe("number");
    });

    it("should return a number from 0 to specified number", function () {
        const randomInt = getRandomInt(2);
        expect([0, 1, 2]).toContain(randomInt);
    });
});
