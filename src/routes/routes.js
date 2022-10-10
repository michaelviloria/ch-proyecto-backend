import express, { Router } from "express";
import passport from "passport";
import {
	home,
	getLogin,
	getSignup,
	postSignup,
	postLogin,
} from "../controllers/controllers.js";

export const router = Router();

router.get("/", home);

router.get("/login", getLogin);
router.post(
	"/login",
	passport.authenticate("login", { failureRedirect: "/login" }),
	postLogin
);

router.get("/signup", getSignup);
router.post(
	"/signup",
	passport.authenticate("signup", { failureRedirect: "/signup" }),
	postSignup
);
