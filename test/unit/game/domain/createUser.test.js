const createUser = require("../../../../src/game/domain/createUser");
const User = createUser();

describe("User", function () {
    let user;

    describe("without parameters", function () {
        it("should return specific error", function () {
            try {
                user = new User();
            } catch (e) {
                expect(e.message).toBe("Cannot destructure property 'name' of 'undefined' as it is undefined.");
            }
        });
    });

    describe("without a name", function () {
        it("should return specific error", function () {
            try {
                user = new User({});
            } catch (e) {
                expect(e.message).toBe("User must have a name.");
            }
        });
    });

    describe("with correct parameters", function () {
        beforeEach(function () {
            user = new User({ name: "Xabi" });
        });

        it("should return an object", function () {
            expect(typeof user).toBe("object");
        });

        it("should return the name", function () {
            expect(user.getName()).toBe("Xabi");
        });

        describe("after updating the name", function () {
            beforeEach(function () {
                user.setName("Leo");
            });

            it("should return updated name", function () {
                expect(user.getName()).toBe("Leo");
            });
        });
    });
});
