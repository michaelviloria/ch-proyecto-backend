import { Router } from "express";
export const routerCart = Router();

// <------ Mongodb ------>

import { cartsModel } from "../models/carts.schema.js";
import CartMongoDB from "../dao/cartMongoDB.js";
const cart = new CartMongoDB(cartsModel);

// <------ Queries ------>

import {
	deleteHome,
	deleteProductById,
	getHome,
	getProductsById,
	postHome,
	postProductsById,
} from "../controllers/cart.controllers.js";

// <------ Queries ------>

routerCart.get("/", getHome);
routerCart.post("/", postHome);
routerCart.delete("/:id", deleteHome);

routerCart.get("/:id/productos", getProductsById);
routerCart.post("/:id/productos", postProductsById);
routerCart.delete("/:id/productos/:id_prod", deleteProductById);
