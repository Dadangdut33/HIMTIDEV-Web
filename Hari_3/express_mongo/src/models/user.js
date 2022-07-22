const mongoose = require("mongoose");

// regex uppercase lowercase number
const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			maxlength: 20,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			validate: {
				validator: (v) => reg.test(v),
				message: "Password must contain at least one uppercase, one lowercase, and one number",
			},
			minlength: 8,
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
