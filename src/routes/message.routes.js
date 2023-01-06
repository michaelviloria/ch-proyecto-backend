import { Router } from "express";
import { MessageController } from "../controllers/index.js";
import { userLogged } from "../middlewares/index.js";

export class MessageRoutes {
	constructor() {
		this.controller = new MessageController();
	}

	start() {
		const router = Router();

		router.get("/", userLogged, this.controller.getAllMessages);
		router.get("/:email", userLogged, this.controller.getUserMessage);
		router.post("/", userLogged, this.controller.addMessage);

		return router;
	}
}
