const express = require("express");
const router = express.Router();
const { getOrderDetails } = require("../controlInUp/orderController");

router.get("/", getOrderDetails);

module.exports = router;
