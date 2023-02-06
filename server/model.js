const mongoose = require("mongoose");

model.exports = class User {
  constructor() {
    const checkinSchema = new mongoose.Schema({
      id: { type: Number, require: true },
      timeStamp: { type: Number, require: true },
      feeling: { type: String, require: true },
      thoughts: { type: String, require: true },
      judgements: { type: String, require: true },
      need: { type: String, require: true },
    });
  }
};
