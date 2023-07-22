const { Address } = require("../../model/address/address.model");

exports.getAddressByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const address = await Address.find({user: userId}).populate('user');
    console.log(address);
    // const filteredData = address.map((item) => {
    //     console.log({item});
    // });
    // // console.log(result);
    res.status(200).json({ result: address });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.addAddress = async (req, res) => {
  const address = new Address(req.body);
  console.log(address);
  try {
    const doc = await address.save();
    const result = await doc.populate("user");
    res.status(201).json(result);
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
