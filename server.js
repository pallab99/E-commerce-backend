const express = require("express");
require("dotenv").config();
const server = express();
const { connectDB } = require("./configs/database");
const { createProduct } = require("./controllers/product/product.js");
const port = process.env.PORT;
server.use(express.json());

server.get("/", (req, res) => {
  res.json({
    success: "true",
  });
});
server.post("/products", createProduct);
connectDB();
server.listen(port, () => {
  console.log("server started");
});
