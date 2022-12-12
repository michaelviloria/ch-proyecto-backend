import mongoose from "mongoose";
const { Schema } = mongoose.Schema;

const orderSchema = new Schema(
	{
		buyer: { type: String },
		status: { type: String, default: "Generated" },
		items: { type: Array },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export const Order = mongoose.model("orders", orderSchema);
