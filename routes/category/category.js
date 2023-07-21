const express = require("express");
const { getAllCategory } = require("../../controllers/category/category");
const router=express.Router();

router.get('/allCategory',getAllCategory);

exports.router=router;