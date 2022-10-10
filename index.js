import mongoose from "mongoose";
import { app } from "./src/server.js";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, async () => {
	await mongoose.connect(process.env.MONGO_CONNECT);
	console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
