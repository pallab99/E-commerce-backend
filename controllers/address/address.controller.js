const { Address } = require("../../model/address/address.model");

exports.getAddressByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const address = await Address.find({ user: userId }).populate("user");
    console.log(address);
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

exports.deleteAddressById = async (req, res) => {
  try {
    const {addressId} = req.params;
    console.log(addressId);
    const address = await Address.findByIdAndDelete(addressId);
    console.log(address);
    res.status(200).json(address);
  } catch (err) {
    res.status(400).json(err);
  }
};

