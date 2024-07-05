const AccountController = require("../controller/accountController")
const router = require("express").Router();

router.get("/",AccountController.getAllAccount);

module.exports = router;