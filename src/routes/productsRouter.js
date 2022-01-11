const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.productCart);
router.post("/");
router.get("/:id");
router.put("/:id");
router.delete("/:id");
router.get("/:id/edit");


router.get("/create");
router.get("/detail", productsController.productDetail);
router.get("/cart" , productsController.productCart);

module.exports = router;