import { Router } from "express";
import { ProductController } from "../controllers/index.js";
import { admin, userLogged } from "../middlewares/index.js";

export class ProductRoutes {
	constructor() {
		this.controller = new ProductController();
	}

	start() {
		const router = Router();

		router.get("/", userLogged, this.controller.getAllProducts);

		router.get("/item/:id", userLogged, this.controller.getProductById);

		router.get(
			"/category/:category",
			userLogged,
			this.controller.getProductsByCategory
		);

		router.post("/new", userLogged, admin, this.controller.createNewProduct);

		router.put("/item/:id", userLogged, admin, this.controller.updateProductById);

		router.delete("/item/:id", userLogged, admin, this.controller.deleteProductById);

		return router;
	}
}
