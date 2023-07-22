const express = require("express");
const {
  addToCart,
  getCartByUser,
  deleteCartItemByProductId,
  updateCartItemByProductId,
} = require("../../controllers/cart/cart.controller");
const router = express.Router();

router
  .post("/addToCart", addToCart)
  .get("/cartItemsByUser", getCartByUser)
  .delete("/deleteCartItemByProductId/:productId", deleteCartItemByProductId)
  .patch("/updateCartItemByProductId/:productId", updateCartItemByProductId);
exports.router = router;
