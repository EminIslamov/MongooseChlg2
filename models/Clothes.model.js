const mongoose = require("mongoose");

const clothesSchema = mongoose.Schema({
  name: String,
  size: String,
  remainingGoods: Number
});

const Clothes = mongoose.model("Clothes", clothesSchema);

module.exports = Clothes;
