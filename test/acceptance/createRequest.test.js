const request = require("supertest");
const app = require("../../src/index");

describe("createRequest", function () {
    describe("POST /api/play", function () {
        describe("wrong parameters", function () {
            it("should return a 400", function (done) {
                const move = { name: "Xabi" };
                request(app)
                    .post("/api/play")
                    .send(move)
                    .expect("Content-Type", /json/)
                    .expect(400)
                    .end((err) => {
                        if (err) {
                            return done(err);
                        }
                        return done();
                    });
            });
        });

        describe("succesfull connection", function () {
            it("should return a 200", function (done) {
                const move = { name: "Xabi", move: "rock" };
                request(app)
                    .post("/api/play")
                    .send(move)
                    .expect("Content-Type", /json/)
                    .expect(200)
                    .end((err) => {
                        if (err) {
                            return done(err);
                        }
                        return done();
                    });
            });
        });
    });

    afterAll( async () => {
        app.close();
    });
});
