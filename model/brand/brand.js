const mongoose = require("mongoose");
const { Schema } = mongoose;
const brandSchema = new Schema({
  value: String,
  label:String,
  checked:Boolean
});

exports.Brand = mongoose.model("Brand", brandSchema);
