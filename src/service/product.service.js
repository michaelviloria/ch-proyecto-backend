import { Product } from "../models/product.model.js";
import { logWarn } from "../utils/logs.js";

export class ProductService {
	async getAll() {
		try {
			const data = await Product.find({});
			return data;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}

	async getById(id) {
		try {
			const data = await Product.findById(id);
			return data;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}

	async getProductsByCategory(category) {
		try {
			const data = await Product.find({ category });
			return data;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}

	async createNewProduct(product) {
		try {
			const newProduct = await Product.create({ ...product });
			return newProduct;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}

	async updateProductById(id, product) {
		try {
			const data = await Product.findByIdAndUpdate(id, product);
			return data;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}

	async deleteProductById(id) {
		try {
			const data = await Product.findByIdAndDelete(id);
			return data;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}
}
