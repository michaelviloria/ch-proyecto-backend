import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import { error404 } from "./middlewares/middlewares.js";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// <---------- Sessions ---------->

app.use(cookieParser("secret"));
app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: false,
	})
);

app.use(passport.initialize());
app.use(passport.session());

// <---------- Engine Pug ---------->

app.set("view engine", ".pug");
app.set("views", "./src/views");

// <---------- Routes ---------->

import { routerProduct } from "./routes/products.routes.js";
app.use("/api/productos", routerProduct);

import { routerCart } from "./routes/cart.routes.js";
app.use("/api/carrito", routerCart);

import { router } from "./routes/routes.js";
app.use(router);

// <---------- Servidor Error 404 ---------->

app.use(error404);
