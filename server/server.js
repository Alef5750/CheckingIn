const express = require("express");
const app = express();
const port = 5000;
const initDatabase = require("./database");

// set cors
const cors = require("cors");
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Create a new Checkin
app.post("/submissions", (req, res) => {
  console.log(req);
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
