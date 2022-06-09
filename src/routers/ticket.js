const express = require("express");
const res = require("express/lib/response");
const { createTicket } = require("../controllers/ticket");

const router = express.Router();

router.post("/create-ticket", createTicket);

module.exports = router;
