export function admin(req, res, next) {
	if (req.user.email === "michaelviloria.g@gmail.com") {
		next();
	} else {
		res.json({
			message: "Unauthorized access",
			result: "reject",
		});
	}
}
