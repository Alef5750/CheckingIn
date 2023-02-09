const express = require("express");
const app = express();
const port = 5000;
const initDatabase = require("./database");
const Entry = require("./entryModel");
const entry = new Entry();

// CORS Middleware
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// CONTROLLERS
const addNewEntry = async (req, res) => {
  const newEntry = req.body;
  const entries = await entry.addNewEntry(newEntry);
  if (entries) res.status(200).send(entries);
  else res.status(400).send("Could not add to entries");
};

// BODY PARSER Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a new Entry
app.post("/entries", addNewEntry);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
