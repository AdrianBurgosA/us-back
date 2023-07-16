const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompraSchema = new Schema({
  date: { type: String },
  products: { type: Array },
  subTotal: { type: Number },
  iva: { type: Number },
  total: { type: Number },
});

module.exports = Compra = mongoose.model("Compra", CompraSchema);
