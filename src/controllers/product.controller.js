import { ProductDto } from "../dto/index.js";
import { ProductService } from "../service/index.js";

export class ProductController {
	constructor() {
		this.dto = new ProductDto();
		this.service = new ProductService();
	}

	getAllProducts = async (req, res) => {
		const response = await this.service.getAll();
		res.json({ data: response });
	};

	getProductById = async (req, res) => {
		const { id } = req.params;
		const response = await this.service.getById(id);
		res.json({ data: response });
	};

	getProductsByCategory = async (req, res) => {
		const { category } = req.params;
		const response = await this.service.getProductsByCategory(
			category.toLowerCase()
		);
		res.json({ data: response });
	};

	createNewProduct = async (req, res) => {
		const product = req.body;

		if (this.dto.validatedProduct(product)) {
			const response = await this.service.createNewProduct(product);
			res.json({ data: response });
		} else {
			res.json({
				result: "error",
				message: "the product information is incorrect or incomplete",
				info_product: {
					name: "String",
					image: "String",
					category: "String",
					price: "Number",
					stock: "Number",
				},
			});
		}
	};

	updateProductById = async (req, res) => {
		const { id } = req.params;
		const product = req.body;

		if (this.dto.validatedProduct(product)) {
			const response = await this.service.updateProductById(id, product);
			res.json({ data: response });
		} else {
			res.json({
				result: "error",
				message: "the product information is incorrect or incomplete",
				info_product: {
					name: "String",
					image: "String",
					category: "String",
					price: "Number",
					stock: "Number",
				},
			});
		}
	};

	deleteProductById = async (req, res) => {
		const { id } = req.params;

		const response = await this.service.deleteProductById(id);
		res.json({ data: response });
	};
}
