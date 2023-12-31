const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Productschema = new Schema({
  name: { type: String },
  category: { type: Number },
  description: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

module.exports = Product = mongoose.model("Product", Productschema);
