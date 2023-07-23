const express = require("express");
const {
  addAddress,
  getAddressByUserId,
  deleteAddressById,
} = require("../../controllers/address/address.controller");

const router = express.Router();

router
  .post("/addAddress", addAddress)
  .get("/getAddressByUserId/:userId", getAddressByUserId)
  .delete("/deleteAddress/:addressId", deleteAddressById);
exports.router = router;
