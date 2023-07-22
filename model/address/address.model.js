const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressModel = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: String, required: true },
});

const addressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  addresses: { type: [addressModel], required: true },
});

exports.Address = mongoose.model("Address", addressSchema);
