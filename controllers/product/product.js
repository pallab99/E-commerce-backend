const { Product } = require("../../model/products/product.js");

exports.createProduct = async (req, res) => {
  try {
    const dataToInsert = req.body;
    console.log("hello");
    const result = await Product.insertMany(dataToInsert);
    console.log(result);
    res.json({
      message: "ok",
    });
  } catch (error) {}
};

exports.getAllProducts = async (req, res) => {
  let queryString = Product.find({});
  let totalProductsQuery = Product.find({});
  if (req.query.category) {
    queryString = queryString.find({ category: req.query.category });
    totalProductsQuery = totalProductsQuery.find({
      category: req.query.category,
    });
  }
  if (req.query.brand) {
    queryString = queryString.find({ brand: req.query.brand });
    totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand });
  }
  if (req.query._sort && req.query._order) {
    queryString = queryString.sort({ [req.query._sort]: req.query._order });
    totalProductsQuery = totalProductsQuery.sort({
      [req.query._sort]: req.query._order,
    });
  }
  const totalDocs = await totalProductsQuery.count().exec();

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    queryString = queryString.skip(pageSize * (page - 1)).limit(pageSize);
  }
  try {
    const products = await queryString.exec();
    res.set("X-Total-Count", totalDocs);
    res.status(200).json({
      products,
      totalItems:totalDocs
    });
  } catch (error) {
    console.log("error");
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the products.",
    });
  }
};
