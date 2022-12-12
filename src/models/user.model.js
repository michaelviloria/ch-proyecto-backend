import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		firstname: { type: String, required: true },
		lastname: { type: String, required: true },
		phone: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export const User = mongoose.model("users", userSchema);
