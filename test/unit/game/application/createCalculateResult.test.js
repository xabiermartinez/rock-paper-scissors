const createCalculateResult = require("../../../../src/game/application/createCalculateResult");
const calculateResult = createCalculateResult();

describe("calculateResult", function () {
    let moves;
    describe("empty moves array", function () {
        beforeEach(function () {
            moves = [];
        });
        it("should throw an error", function () {
            //const result = calculateResult(moves);
            expect(() => calculateResult(moves)).toThrow("calculateResult needs 2 moves.");
        });
    });

    describe("correct moves array", function () {
        describe("tie", function () {
            beforeEach(function () {
                moves = [
                    { name: "Xabi", move: "rock" },
                    { name: "Bot", move: "rock" }
                ];
            });

            it("should return expected result", function () {
                const result = calculateResult(moves);
                expect(result).toEqual({ tie: true, winner: "none" });
            });
        });

        describe("player wins", function () {
            beforeEach(function () {
                moves = [
                    { name: "Xabi", move: "rock" },
                    { name: "Bot", move: "scissors" }
                ];
            });

            it("should return expected result", function () {
                const result = calculateResult(moves);
                expect(result).toEqual({ tie: false, winner: "Xabi" });
            });
        });

        describe("Bot wins", function () {
            beforeEach(function () {
                moves = [
                    { name: "Xabi", move: "rock" },
                    { name: "Bot", move: "paper" }
                ];
            });

            it("should return expected result", function () {
                const result = calculateResult(moves);
                expect(result).toEqual({ tie: false, winner: "Bot" });
            });
        });
    });
});
