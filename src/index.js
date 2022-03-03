const express = require("express");
const cors = require("cors");

const { playGameValidation } = require("./game/infrastructure/validation");
const { playGame } = require("./game/interfaces");
const createRequest = require("./game/infrastructure/createRequest");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/play", createRequest(playGame, playGameValidation));

module.exports = app.listen(3000, () => {
    console.log("Server started (http://localhost:3000/ externally) !");
});
