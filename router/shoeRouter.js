const ShoeController = require("../controller/shoeController");
const router = require("express").Router();

router.get("/",ShoeController.getAllShoe);
router.post("/",ShoeController.postShoe);
router.put("/:id",ShoeController.editShoe);

module.exports = router;