import { Cart } from "../models/cart.model.js";
import { mailing } from "../utils/nodemailer.js";
import { logWarn } from "../utils/logs.js";

export class CartService {
	async getAll() {
		try {
			const data = await Cart.find({});
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
			const data = await Cart.findById(id);
			return data;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}

	async addNewCart(cart) {
		try {
			const newCart = await Cart.create({ ...cart });

			const email = newCart.email;
			const subject = "New purchase order";
			const html = `
			<p>
				The user ${email} has made a purchase.
				Purchase ID ${newCart._id}.
			</p>`;

			await mailing(email, subject, html);
			return newCart;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}

	async updateCartById(id, cart) {
		try {
			const data = await Cart.findByIdAndUpdate(id, cart);
			return data;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}

	async deleteCartById(id) {
		try {
			const data = await Cart.findByIdAndDelete(id);
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
