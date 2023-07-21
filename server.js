const express = require("express");
require("dotenv").config();
const server = express();
const cors = require("cors");
const { connectDB } = require("./configs/database");
const port = process.env.PORT;
const productRouter = require("./routes/products/product");
const categoryRouter=require("./routes/category/category")
const brandRouter=require("./routes/brand/brand")
server.use(cors());
server.use(express.json());
server.use("/api", productRouter.router);
server.use("/api", categoryRouter.router);
server.use("/api", brandRouter.router);

server.get("/", (req, res) => {
  res.json({
    success: "true",
  });
});

connectDB();
server.listen(port, () => {
  console.log("server started on port : " + port);
});
