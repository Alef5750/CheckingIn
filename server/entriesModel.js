const mongoose = require("mongoose");
module.exports = class Entry {
  constructor() {
    const entrySchema = new mongoose.Schema({
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

  async getEntries() {
    try {
      const entries = await this.EntryModel.find();
      return entries;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async deleteEntryById(id) {
    try {
      const objId = mongoose.Types.ObjectId(id);
      const entry = await this.EntryModel.deleteOne({ _id: objId });
      return entry;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
};
