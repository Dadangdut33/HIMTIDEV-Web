const noteModel = require("../model/note");

// GET
const getNotes = async (req, res, next) => {
	const users = await noteModel.find({});

	res.status(200).json({
		data: users,
		message: "Notes fetched successfully",
		success: true,
	});
};

const getOneNote = async (req, res, next) => {
	const user = await noteModel.findById(req.params._id);

	res.status(200).json({
		data: user,
		message: "Note fetched successfully",
		success: true,
	});
};

// POST
const createNote = async (req, res, next) => {
	const note = new noteModel(req.body);
	const newUser = await note.save();

	res.status(201).json({
		data: newUser,
		message: "Note created successfully",
		success: true,
	});
};

// PUT
const updateNotes = async (req, res, next) => {
	const note = await noteModel.findByIdAndUpdate(req.params._id, req.body, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({
		data: note,
		message: "Note updated successfully",
		success: true,
	});
};

// DELETE
const deleteNote = async (req, res, next) => {
	const note = await noteModel.findByIdAndDelete(req.params._id);

	res.status(200).json({
		data: note,
		message: "Note deleted successfully",
		success: true,
	});
};

module.exports = {
	getNotes,
	getOneNote,
	createNote,
	updateNotes,
	deleteNote,
};
