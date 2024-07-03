const BrandController = require("../controller/brandController");
const router = require("express").Router();

router.post("/",BrandController.postBrand);

module.exports = router;