import { Router } from "express";
import { AppController } from "../controllers/index.js";
import { userLogged } from "../middlewares/index.js";
import passport from "passport";

export class AppRoutes {
	constructor() {
		this.controller = new AppController();
	}

	start() {
		const router = Router();

		// ? Home
		router.get("/", userLogged, this.controller.getHome);

		// ? Login
		router.get("/login", this.controller.getLogin);
		
		router.post(
			"/login",
			passport.authenticate("login", {
				failureRedirect: "/login-failed",
				failureMessage: "Wrong email or password",
			}),
			this.controller.postLogin
		);

		router.get("/login-failed", this.controller.getLoginFailed);

		// ? Register
		router.get("/register", this.controller.getRegister);
		router.post(
			"/register",
			passport.authenticate("register", {
				failureRedirect: "/register-failed",
				failureMessage: "Incorrect or incomplete information",
			}),
			this.controller.postRegiter
		);
		router.get("register-failed", this.controller.getRegisterFailed);

		// ? Logout
		router.get("/logout", this.controller.getLogout);

		return router;
	}
}
