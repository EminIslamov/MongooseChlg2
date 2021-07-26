const mongoose = require("mongoose");

const computerSchema = mongoose.Schema({
  name: String,
  year: Number,
  price: Number,
});

const Computer = mongoose.model("Computer", computerSchema);

module.exports = Computer;
