import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema(
	{
		email: { type: String, required: true },
		message: { type: String, required: true },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export const Message = mongoose.model("messages", messageSchema);
