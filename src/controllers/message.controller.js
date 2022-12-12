import { MessageService } from "../service/index.js";

export class MessageController {
	constructor() {
		this.service = new MessageService();
	}

	getAllMessages = async (req, res) => {
		const response = await this.service.getAll();
		res.json({ data: response });
	};

	getUserMessage = async (req, res) => {
		const { email } = req.params;
		const response = await this.service.getByEmail(email);
		res.json({ data: response });
	};

	addMessage = async (req, res) => {
		const message = req.body;
		const response = await this.service.addMessage(message);
		res.json({ data: response });
	};
}
