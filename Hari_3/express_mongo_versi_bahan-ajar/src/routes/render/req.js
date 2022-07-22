var express = require("express");
var router = express.Router();

router.get("/rest", (req, res) => {
	res.render("req/rest");
});

router.get("/rpc", (req, res) => {
	res.render("req/rpc");
});

module.exports = router;
