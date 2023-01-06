import { Router } from "express";
import { OrderController } from "../controllers/index.js";
import { userLogged } from "../middlewares/index.js";

export class OrderRoutes {
	constructor() {
		this.controller = new OrderController();
	}

	start() {
		const router = Router();

		router.get("/", userLogged, this.controller.getAllOrders);
		router.get("/:id", userLogged, this.controller.getOrderById);
		router.post("/", userLogged, this.controller.addNewOrder);
		router.delete("/", userLogged, this.controller.deleteOrderById);

		return router;
	}
}
