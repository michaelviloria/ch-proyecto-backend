import { CartDto } from "../dto/index.js";
import { CartService } from "../service/index.js";

export class CartController {
	constructor() {
		this.dto = new CartDto();
		this.service = new CartService();
	}

	getAllCarts = async (req, res) => {
		const response = await this.service.getAll();
		res.json({ data: response });
	};

	getCartById = async (req, res) => {
		const { id } = req.params;
		const response = await this.service.getById(id);
		res.json({ data: response });
	};

	addNewCart = async (req, res) => {
		const cart = req.body;

		if (this.dto.validatedCart(cart)) {
			const response = await this.service.addNewCart(cart);
			res.json({ data: response });
		} else {
			res.json({
				result: "error",
				message: "the cart information is incorrect or incomplete",
				info_cart: {
					address: "String",
					email: "String",
					items: "Array",
				},
			});
		}
	};

	updateCartById = async (req, res) => {
		const { id } = req.params;
		const cart = req.body;

		if (this.dto.validatedCart(cart)) {
			const response = await this.service.updateCartById(id, cart);
			res.json({ data: response });
		} else {
			res.json({
				result: "error",
				message: "the cart information is incorrect or incomplete",
				info_cart: {
					address: "String",
					email: "String",
					items: "Array",
				},
			});
		}
	};

	deletecartById = async (req, res) => {
		const { id } = req.params;

		const response = await this.service.deleteCartById(id);
		res.json({ data: response });
	};
}
