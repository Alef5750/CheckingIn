const express = require("express");
const app = express();
const port = 5000;
const initDatabase = require("./database");

// CORS Middleware
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// BODY PARSER Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a new Entry
app.post("/entries", (req, res) => {
  const newEntry = req.body;
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
