export const home = (req, res) => {
	res.render("home");
};

export const getSignin = (req, res) => {
	if (req.isAuthenticated()) {
		const { username } = req.user;
		res.render("home", { username });
	} else res.render("signin");
};

export const postSingin = (req, res) => res.redirect("/");

export const getSignup = (req, res) => res.render("signup");

export const getLogout = (req, res) => {
	req.logout();
	res.redirect("/");
};
