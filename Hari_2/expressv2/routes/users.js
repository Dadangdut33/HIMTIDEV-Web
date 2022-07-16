var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("Ini adalah /users");
});

router.get("/edit", function (req, res, next) {
	res.send("ini adalah /users/edit");
});

module.exports = router;
