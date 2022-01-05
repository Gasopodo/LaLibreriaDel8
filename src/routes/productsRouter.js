const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.productCart);
router.get("/detail", productsController.productDetail);
router.get("/cart" , productsController.productCart);

module.exports = router;