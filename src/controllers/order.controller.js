import { OrderService } from "../service/index.js";

export class OrderController {
	constructor() {
		this.service = new OrderService();
	}

	getAllOrders = async (req, res) => {
		const response = await this.service.getAll();
		res.json({ data: response });
	};

	getOrderById = async (req, res) => {
		const { id } = req.params;
		const response = await this.service.getById(id);
		res.json({ data: response });
	};

	addNewOrder = async (req, res) => {
		const order = req.body;
		const response = await this.service.createNewOrder(order);
		res.json({ data: response });
	};

	deleteOrderById = async (req, res) => {
		const { id } = req.params;

		const response = await this.service.deleteOrderById(id);
		res.json({ data: response });
	};
}
