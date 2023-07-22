const { Cart } = require("../../model/cart/cart.model");

exports.getCartByUser = async (req, res) => {
  const { user } = req.query;
  try {
    const cartItems = await Cart.find({ user: user })
      .populate("user")
      .populate("product");
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.addToCart = async (req, res) => {
  const cart = new Cart(req.body);
  try {
    const doc = await cart.save();
    const result = await doc.populate("product");
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteCartItemByProductId = async (req, res) => {
  try {
    const productId = req.params.productId;
    const cartItems = await Cart.findByIdAndDelete(productId);
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.updateCartItemByProductId = async (req, res) => {
  try {
    const productId = req.params.productId;
    const cartItems = await Cart.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    res.status(200).json(cartItems);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
