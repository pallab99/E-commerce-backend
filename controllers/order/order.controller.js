const { Order } = require("../../model/order/order.model");

exports.getOrderByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ user: userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  try {
    const doc = await order.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteCartAfterOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findByIdAndDelete(orderId);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json(error);
  }
};

// exports.deleteCartItemByProductId = async (req, res) => {
//   try {
//     const productId = req.params.productId;
//     const cartItems = await Cart.findByIdAndDelete(productId);
//     res.status(200).json(cartItems);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };
// exports.updateCartItemByProductId = async (req, res) => {
//   try {
//     const productId = req.params.productId;
//     const cartItems = await Cart.findByIdAndUpdate(productId, req.body, {
//       new: true,
//     });
//     res.status(200).json(cartItems);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json(err);
//   }
// };
