const mongoose = require("mongoose");

const PhoneSchema = mongoose.Schema({
  name: String,
  color: String,
  price: Number,
});

const Phone = mongoose.model("Phone", PhoneSchema);

module.exports = Phone;
