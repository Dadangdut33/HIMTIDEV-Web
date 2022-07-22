const userModel = require("../models/user");

// GET
const getAllusers = async (req, res) => {
	const users = await userModel.find({}).select("-password");

	res.status(200).json({
		data: users,
		message: "Get all users success",
		success: true,
	});
};

const getOneUser = async (req, res) => {
	const user = await userModel.findOne({ username: req.params.username }).select("-password");

	if (!user)
		return res.status(404).json({
			data: null,
			message: "User not found",
			success: false,
		});

	res.status(200).json({
		data: user,
		message: "Get one user success",
		success: true,
	});
};

// post
const createUser = async (req, res) => {
	try {
		const user = await userModel.create(req.body);

		res.status(201).json({
			data: user,
			message: "Create user success",
			success: true,
		});
	} catch (error) {
		res.status(500).json({
			data: null,
			message: error.message,
			success: false,
		});
	}
};

// put
const updateUser = async (req, res) => {
	try {
		const user = await userModel.findOneAndUpdate({ username: req.params.username }, req.body, { new: true, runValidators: true });

		if (!user)
			return res.status(404).json({
				data: null,
				message: "User not found",
				success: false,
			});

		res.status(200).json({
			data: user,
			message: "Update user success",
			success: true,
		});
	} catch (error) {
		res.status(500).json({
			data: null,
			message: error.message,
			success: false,
		});
	}
};

// delete
const deleteUser = async (req, res) => {
	const user = await userModel.findOneAndRemove({ username: req.params.username });

	if (!user)
		return res.status(404).json({
			data: null,
			message: "User not found",
			success: false,
		});

	res.status(200).json({
		data: user,
		message: "Delete user success",
		success: true,
	});
};

module.exports = {
	getAllusers,
	getOneUser,
	createUser,
	updateUser,
	deleteUser,
};
