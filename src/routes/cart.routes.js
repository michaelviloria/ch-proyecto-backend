import { Router } from "express";
import { CartController } from "../controllers/index.js";
import { userLogged } from "../middlewares/index.js";

export class CartRoutes {
	constructor() {
		this.controller = new CartController();
	}

	start() {
		const router = Router();

		router.get("/", userLogged, this.controller.getAllCarts);
		router.get("/:id", userLogged, this.controller.getCartById);
		router.post("/", userLogged, this.controller.addCart);
		router.put("/:id", userLogged, this.controller.updateCartById);
		router.delete("/:id", userLogged, this.controller.deletecartById);
	}
}
