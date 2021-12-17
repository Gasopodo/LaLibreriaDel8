express = require("express");
router = express.Router();
productsController = require("../controllers/productsController");

router.get("/", productsController.productCart);
router.get("/detail", productsController.productDetail)

module.exports = router;