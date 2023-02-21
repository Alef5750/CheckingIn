const Entry = require("./entriesModel");
const entry = new Entry();

const getEntries = async (req, res) => {
  const entries = await entry.getEntries();
  if (entries) {
    res.status(200).send(entries);
  } else {
    res.status(400).send("Could not add to entries");
  }
};

const addNewEntry = async (req, res) => {
  const newEntry = req.body;
  const entries = await entry.addNewEntry(newEntry);
  if (entries) {
    res.status(200).send(entries);
  } else {
    res.status(400).send("Could not add to entries");
  }
};

const deleteEntryById = async (req, res) => {
  const id = req.params.id;
  const deletedEntry = await entry.deleteEntryById(id);
  console.log(deletedEntry);
  if (deletedEntry) {
    res.status(200).send(deletedEntry);
  } else {
    res.status(400).send("Could not delete entry");
  }
};

module.exports = { getEntries, addNewEntry, deleteEntryById };
