const mongoose = require("mongoose");
async function connectToMongoDb(url) {
  return await mongoose
    .connect(url)
    .then(() => console.log("Mongodb connected"));
}

module.exports = connectToMongoDb;
