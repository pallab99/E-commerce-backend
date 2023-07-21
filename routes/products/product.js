const express = require("express");
const { getAllProducts, getProductById } = require("../../controllers/product/product.js");
const router=express.Router();

router.get('/allProducts',getAllProducts).get('/product/:id',getProductById)

exports.router=router;