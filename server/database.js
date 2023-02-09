const mongoose = require("mongoose");

const URI =
  "mongodb+srv://alewitt:bn3Z9YWLpxfNgMkX@clustercheckingin.blwsffu.mongodb.net/test";

//Preparing for a change in Mongoose 7
mongoose.set("strictQuery", false);

class Database {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose
      .connect(URI)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error", err);
      });
  }
}

module.exports = new Database();
