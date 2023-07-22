const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../../controllers/auth/auth.controller");

const router = express.Router();

router
  .post("/signUp", registerUser)
  .post("/signIn", loginUser)
  .get("/signOut", logoutUser);

exports.router = router;
