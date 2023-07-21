const { Product } = require("../../model/products/product.js");

exports.createProduct = async (req, res) => {
  try {
    // Extract the data from req.body
    const dataToInsert = req.body;
    console.log("hello");
    // Insert the data into the collection using insertMany
    const result = await Product.insertMany(dataToInsert);
    console.log(result);
    res.json({
      message: "ok",
    });
  } catch (error) {}
};
