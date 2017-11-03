const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../", "client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "client", "index.html"));
});

app.listen(PORT, () => {
  console.log("...listening on port ", PORT);
});

module.exports = app;
