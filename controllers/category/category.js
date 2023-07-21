const { Category } = require("../../model/category/category");

exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
};
