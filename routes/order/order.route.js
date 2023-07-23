const express = require("express");
const {
  createOrder,
  getOrderByUser,
  deleteCartAfterOrder,
} = require("../../controllers/order/order.controller");
const router = express.Router();

router
  .post("/createOrder", createOrder)
  .get("/getOrderByUser/:userId", getOrderByUser)
  .delete("/deleteCartAfterOrder/:orderId", deleteCartAfterOrder);
exports.router = router;
