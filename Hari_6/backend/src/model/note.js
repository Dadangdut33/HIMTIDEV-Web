const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		completed: {
			type: Boolean,
			default: false,
		},
	},
	{ collection: "notes", timestamps: true }
);

const noteModel = mongoose.model("notes", noteSchema);

module.exports = noteModel;
