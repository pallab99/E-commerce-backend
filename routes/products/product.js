const express = require("express");
const { getAllProducts } = require("../../controllers/product/product.js");
const router=express.Router();

router.get('/allProducts',getAllProducts);

exports.router=router;