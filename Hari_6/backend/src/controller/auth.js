const login = async (req, res) => {
	const user = await userModel.findOne({ username: req.body.username });

	if (user) {
		if (user.password === req.body.password) {
			req.session.user = user.username;
			res.status(200).json({
				message: "Login Success",
				success: true,
			});
		} else {
			res.status(401).json({
				message: "Login Failed wrong username or password",
				success: false,
			});
		}
	} else {
		res.status(401).json({
			message: "Login Failed wrong username or password",
			success: false,
		});
	}
};

const checkLoggedIn = async (req, res) => {
	if (req.session.user) {
		res.status(200).json({
			message: "User is logged in",
			success: true,
		});
	} else {
		res.status(401).json({
			message: "User is not logged in",
			success: false,
		});
	}
};

const logout = async (req, res) => {
	req.session.destroy();

	res.status(200).json({
		message: "User logged out successfully",
		success: true,
	});
};

module.exports = {
	login,
	logout,
	checkLoggedIn,
};
