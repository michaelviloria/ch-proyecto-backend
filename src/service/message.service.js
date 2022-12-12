import { Message } from "../models/message.model.js";
import { logWarn } from "../utils/logs.js";

export class MessageService {
	async getAll() {
		try {
			const data = await Message.find({});
			return data;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}

	async getByEmail(email) {
		try {
			const data = await Message.find({ email });
			return data;
		} catch (error) {
			return {
				result: "error",
				message: "an error has occurred with the database",
			};
			logWarn.warn(error);
		}
	}

	async addMessage(message) {
		try {
			const data = await Message.findOneAndUpdate({
				email: message.email,
				...message,
			});
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
