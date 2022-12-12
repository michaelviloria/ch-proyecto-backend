import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
	{
		name: { type: String, required: true },
		image: { type: String, required: true },
		price: { type: Number, required: true },
		description: { type: String },
		category: { type: String, required: true },
		stock: { type: Number, required: true },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export const Product = mongoose.model("products", productSchema);
