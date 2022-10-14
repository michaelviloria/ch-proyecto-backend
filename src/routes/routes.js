import { Router } from "express";
import passport from "passport";
import {
	home,
	getSignin,
	getSignup,
	postSingin,
	getLogout,
} from "../controllers/controllers.js";
import { upload } from "../utils/upload.js";
export const router = Router();

router.get("/", home);

router.get("/signin", getSignin);
router.post(
	"/signin",
	passport.authenticate("local-signin", {
		failureRedirect: "/signin",
		passReqToCallback: true,
	}),
	postSingin
);

router.get("/signup", getSignup);
router.post(
	"/signup",
	upload.single("image"),
	(req, res, next) => {
		const file = req.file;
		if (file) {
			res.send(file);
		} else {
			next();
		}
	},
	passport.authenticate("local-signup", {
		successRedirect: "/",
		failureRedirect: "/signup",
		passReqToCallback: true,
	})
);

router.get("/logout", getLogout);
