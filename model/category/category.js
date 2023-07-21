const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({
  value: String,
  label:String,
  checked:Boolean
});

exports.Category = mongoose.model("Category", categorySchema);
