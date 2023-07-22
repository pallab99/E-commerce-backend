const express = require("express");
const { getAllBrand } = require("../../controllers/brand/brand");
const router=express.Router();

router.get('/allBrand',getAllBrand);

exports.router=router;