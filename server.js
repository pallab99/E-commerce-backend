const express = require("express");
require("dotenv").config();
const server = express();
const cors = require("cors");
const { connectDB } = require("./configs/database");
const port = process.env.PORT;
const productRouter = require("./routes/products/product");
server.use(cors());
server.use(express.json());
server.use("/api", productRouter.router);

server.get("/", (req, res) => {
  res.json({
    success: "true",
  });
});

connectDB();
server.listen(port, () => {
  console.log("server started on port : " + port);
});
