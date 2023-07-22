const { Brand } = require("../../model/brand/brand");

exports.getAllBrand = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.status(200).json(brands);
  } catch (error) {
    res.status(400).json(error);
  }
};
