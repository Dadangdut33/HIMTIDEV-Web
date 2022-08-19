const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: "user",
		},
		bio: {
			type: String,
			default: "",
		},
	},
	{ collection: "users", timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
