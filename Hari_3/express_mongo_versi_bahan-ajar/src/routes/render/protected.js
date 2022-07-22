var express = require("express");
var router = express.Router();

const auhtMiddleware = (req, res, next) => {
	if (req.session & req.session.user) {
		next();
	} else {
		res.status(401).json({
			message: "Unauthorized",
		});
	}
};

router.get("/", (req, res) => {
	// check if user is logged in
	if (req.session.user) {
		res.send("You are logged in");
	} else {
		res.send("You are not logged in");
	}
});

module.exports = router;
