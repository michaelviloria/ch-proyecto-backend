import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import { logError } from "../utils/logs.js";

const isValidPassword = (user, password) =>
	bcrypt.compareSync(password, user.password);
const createHash = (password) =>
	bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);

passport.use(
	"login",
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
		},
		async (email, password, done) => {
			try {
				const user = await User.findOne({ email });
				if (!user) return done(null, false, { message: "User not found" });

				const validate = isValidPassword(user, password);
				if (!validate) return done(null, false, { message: "Wrong password" });

				return done(null, user, { message: "Login succesfull" });
			} catch (error) {
				return done(error);
			}
		}
	)
);

passport.use(
	"register",
	new LocalStrategy(
		{
			passReqToCallback: true,
			usernameField: "email",
			passwordField: "password",
		},
		async (req, email, password, done) => {
			try {
				const user = await User.create({
					email,
					password: createHash(password),
					firstname: req.body.firstname,
					lastname: req.body.lastname,
					phone: req.body.phone,
				});
				return done(null, user);
			} catch (error) {
				return done(error);
			}
		}
	)
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
	done(null, user);
});
