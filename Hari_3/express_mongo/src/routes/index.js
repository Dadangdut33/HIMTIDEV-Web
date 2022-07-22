var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
	res.render("index", { title: "Express" });
});

router.get("/req/rest", (req, res) => {
	res.render("req/rest");
});

router.get("/req/rpc", (req, res) => {
	res.render("req/rpc");
});

router.get("/protected", (req, res) => {
	if (req.session && req.session.user) {
		res.send("Logged in");
	} else {
		res.send("Not logged in");
	}
});

router.get("/session/login", (req, res) => {
	res.render("session/login");
});
router.get("/session/register", (req, res) => {
	res.render("session/register");
});

module.exports = router;
