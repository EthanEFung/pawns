const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.get("/", () => {
  res.send("Hello, world");
});

app.listen(PORT, () => {
  console.log("...listening on port ", PORT);
});
