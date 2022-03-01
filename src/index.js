const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

module.exports = app.listen(3000, () => {
    console.log("Server started (http://localhost:3000/ externally) !");
});
