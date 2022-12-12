import { Order } from "../models/order.model.js";
import { mailing } from "../utils/nodemailer.js";
import { logWarn } from "../utils/logs.js";

export class OrderService {
	async getAll() {
		try {
			const data = await Order.find({});
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
			const data = await Order.findById(id);
			return data;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}

	async createNewOrder(order) {
		try {
			const newOrder = await Order.create({ ...order });

			const email = newOrder.email;
			const subject = "Completed purchase order";
			const html = `
			<p>
				The user ${email} has made the purchase.
				Purchase ID ${newOrder._id}.
			</p>
			`;
			await mailing(email, subject, html);
			
			return newOrder;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}
}
