// ? <-------------------- Dependencies -------------------->
import express from "express";
import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import mongoose from "mongoose";
import { MessageService, ProductService } from "./service/index.js";
import { config } from "./config/index.js";
import { LogRutes } from "./middlewares/logRutes.js";
import { logInfo } from "./utils/logs.js";
import * as auth from "./middlewares/auth.js";

// ? <-------------------- Server Configuration -------------------->
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser("secret"));
app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 60000 * 5 },
	})
);

app.use(passport.initialize());
app.use(passport.session());

// ? <-------------------- Rutes -------------------->
import {
	AppRoutes,
	CartRoutes,
	MessageRoutes,
	OrderRoutes,
	ProductRoutes,
} from "./routes/index.js";

const logRutes = new LogRutes();
app.use(logRutes.info());

const appRoutes = new AppRoutes();
app.use(appRoutes.start());

const productRoutes = new ProductRoutes();
app.use("/api/products", productRoutes.start());

const cartRoutes = new CartRoutes();
app.use("/api/cart", cartRoutes.start());

const orderRoutes = new OrderRoutes();
app.use("/api/order", orderRoutes.start());

const messageRoutes = new MessageRoutes();
app.use("/chat", messageRoutes.start());

// ? <-------------------- Web Socket -------------------->
const messageService = new MessageService();
const productService = new ProductService();
let toChat = [];

io.on("connection", (socket) => {
	logInfo.info(`Client ID: ${socket.id}. Started connection through socket`);
	io.sockets.emit("new-message-server", toChat);

	socket.on("new-message", async (data) => {
		const message = await data;
		toChat.push(data);
		messageService.addMessage(message);
		io.sockets.emit("new-message-server", toChat);
	});

	socket.on("new-producto", async (data) => {
		const product = await data;
		productService.createNewProduct(product);
		io.sockets.emit("new-prod-server", product);
	});
});

// ? <-------------------- Server -------------------->
const server = app.listen(config.PORT, async () => {
	await mongoose.connect(config.connect_db);
	logInfo.info(
		`Servidor HTTP escuchando en el puerto ${server.address().port}`
	);
});

server.on("error", (error) => console.log(`Error en servidor: ${error}`));
