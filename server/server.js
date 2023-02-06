const express = require("express");
const app = express();
const port = 5000;

// Create a new Checkin
app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
