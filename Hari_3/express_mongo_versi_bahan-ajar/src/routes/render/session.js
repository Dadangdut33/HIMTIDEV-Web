var express = require("express");
var router = express.Router();

router.get("/login", (req, res) => {
	res.render("session/login");
});

router.get("/register", (req, res) => {
	res.render("session/register");
});

router.get("/logout", (req, res) => {
	req.session.destroy(function (err) {
		res.redirect("/");
	});
});

module.exports = router;
