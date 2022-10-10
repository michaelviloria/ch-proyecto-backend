import { Router } from "express";
export const routerProduct = Router();

// <------ Mongodb ------>

import { productsModel } from "../models/products.schema.js";
import ProductMongoDB from "../dao/productMongoDB.js";
const product = new ProductMongoDB(productsModel);

// <------ Middleware ------>

import { admin } from "../middlewares/middlewares.js";

// <------ Controllers ------>

import {
	getHome,
	postHome,
	putHome,
	deleteHome,
} from "../controllers/products.controllers.js";

// <------ Queries ------>

routerProduct.get("/:id?", getHome);
routerProduct.post("/", admin.admin, postHome);
routerProduct.put("/:id", admin.admin, putHome);
routerProduct.delete("/:id", admin.admin, deleteHome);
