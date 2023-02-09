const Entry = require("./entriesModel");
const entry = new Entry();

const addNewEntry = async (req, res) => {
  const newEntry = req.body;
  const entries = await entry.addNewEntry(newEntry);
  if (entries) {
    console.log("entry added!");
    res.status(200).send(entries);
  } else {
    console.log("oh nope.");
    res.status(400).send("Could not add to entries");
  }
};

module.exports = { addNewEntry };
