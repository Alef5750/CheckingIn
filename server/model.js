const mongoose = require("mongoose");
model.exports = class Entry {
  constructor() {
    const entrySchema = new mongoose.Schema({
      id: { type: Number, require: true },
      timeStamp: { type: Number, require: true },
      feeling: { type: String, require: true },
      thoughts: { type: String, require: true },
      judgements: { type: String, require: true },
      need: { type: String, require: true },
    });

    this.EntryModel = mongoose.model("Entries", entrySchema);
  }

  async addNewEntry(newEntryInfo) {
    try {
      const newEntry = await this.EntryModel.create(newEntryInfo);
      return newEntry;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
};
