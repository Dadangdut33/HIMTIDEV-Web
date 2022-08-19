const userModel = require("../model/user");

// GET
const getUsers = async (req, res) => {
	const users = await userModel.find({});

	res.status(200).json({
		data: users,
		message: "Users fetched successfully",
		success: true,
	});
};

const getOneUser = async (req, res) => {
	const user = await userModel.findById(req.params._id);
	// const user = await userModel.find({ username: req.params.username });

	res.status(200).json({
		data: user,
		message: "User fetched successfully",
		success: true,
	});
};

// POST
const createUser = async (req, res) => {
	const user = new userModel(req.body);

	const newUser = await user.save();

	res.status(201).json({
		data: newUser,
		message: "User created successfully",
		success: true,
	});
};

// PUT
const updateUser = async (req, res) => {
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
const deleteUser = async (req, res) => {
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
	checkLoggedIn,
};
