const express = require("express");
require("dotenv").config();
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const { connectDB } = require("./configs/database");
const port = process.env.PORT;
const productRouter = require("./routes/products/product");
const categoryRouter = require("./routes/category/category");
const brandRouter = require("./routes/brand/brand");
const authRouter = require("./routes/auth/auth.routes");
const cartRouter = require("./routes/cart/cart.routes");

//!middlewares
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));

//! api routes
server.use("/api", productRouter.router);
server.use("/api", categoryRouter.router);
server.use("/api", brandRouter.router);
server.use("/api", authRouter.router);
server.use("/api", cartRouter.router);


server.get("/", (req, res) => {
  res.json({
    success: "true",
  });
});

connectDB();
server.listen(port, () => {
  console.log("server started on port : " + port);
});
