const userModel = require("../model/user");

// GET
const getUsers = async (req, res, next) => {
	const users = await userModel.find({});

	res.status(200).json({
		data: users,
		message: "Users fetched successfully",
		success: true,
	});
};

const getOneUser = async (req, res, next) => {
	const user = await userModel.findById(req.params._id);
	// const user = await userModel.find({ username: req.params.username });

	res.status(200).json({
		data: user,
		message: "User fetched successfully",
		success: true,
	});
};

const login = async (req, res, next) => {
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

// POST
const createUser = async (req, res, next) => {
	const user = new userModel(req.body);

	const newUser = await user.save();

	res.status(201).json({
		data: newUser,
		message: "User created successfully",
		success: true,
	});
};

// PUT
const updateUser = async (req, res, next) => {
	const user = await userModel.findByIdAndUpdate(req.params._id, req.body, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({
		data: user,
		message: "User updated successfully",
		success: true,
	});
};

// DELETE
const deleteUser = async (req, res, next) => {
	const user = await userModel.findByIdAndDelete(req.params._id);

	res.status(200).json({
		data: user,
		message: "User deleted successfully",
		success: true,
	});
};

module.exports = {
	login,
	getUsers,
	getOneUser,
	createUser,
	updateUser,
	deleteUser,
};
