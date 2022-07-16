var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/req/rest", (req, res) => {
	res.render("req/rest");
});

router.get("/req/rpc", (req, res) => {
	res.render("req/rpc");
});

module.exports = router;
