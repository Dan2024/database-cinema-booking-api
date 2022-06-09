const express = require("express");
const res = require("express/lib/response");
const { createScreen } = require("../controllers/screen");

const router = express.Router();

router.post("/create-screen", createScreen);

module.exports = router;
