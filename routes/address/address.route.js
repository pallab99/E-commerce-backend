const express = require("express");
const {
  addAddress,
  getAddressByUserId,
} = require("../../controllers/address/address.controller");

const router = express.Router();

router
  .post("/addAddress", addAddress)
  .get("/getAddressByUserId/:userId", getAddressByUserId);

exports.router = router;
