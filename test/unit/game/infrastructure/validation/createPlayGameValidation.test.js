const { playGameValidation } = require("../../../../../src/game/infrastructure/validation");

describe("playGameValidation", function () {
    describe("without data", function () {
        let body;
        beforeEach(function () {
            body = {};
        });
        it("should not validate", function () {
            const validation = playGameValidation({ body });
            expect(validation.validates).toBe(false);
        });
    });

    describe("with incorrect data", function () {
        let body;
        beforeEach(function () {
            body = { name: 3, move: -2 };
        });
        it("should not validate", function () {
            const validation = playGameValidation({ body });
            expect(validation.validates).toBe(false);
            expect(validation.error).toBe("\"name\" must be a string");
        });
    });

    describe("with just name", function () {
        let body;
        beforeEach(function () {
            body = { name: "Xabi" };
        });
        it("should not validate", function () {
            const validation = playGameValidation({ body });
            expect(validation.validates).toBe(false);
            expect(validation.error).toBe("\"move\" is required");
        });
    });

    describe("with just one parameter", function () {
        let body;
        beforeEach(function () {
            body = { name: "Xabi" };
        });
        it("should not validate", function () {
            const validation = playGameValidation({ body });
            expect(validation.validates).toBe(false);
            expect(validation.error).toBe("\"move\" is required");
        });
    });

    describe("with correct parameter", function () {
        let body;
        beforeEach(function () {
            body = { name: "Xabi", move: "rock" };
        });
        it("should validate", function () {
            const validation = playGameValidation({ body });
            expect(validation.validates).toBe(true);
        });
    });

});
