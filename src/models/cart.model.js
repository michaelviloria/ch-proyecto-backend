import mongoose from "mongoose";
const { Schema } = mongoose;

const cartSchema = new Schema(
	{
		address: { type: String, required: true },
		email: { type: String, required: true },
		items: { type: Array, required: true },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export const Cart = mongoose.model("carts", cartSchema);
