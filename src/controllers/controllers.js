export const home = (req, res) => {
	res.render("home");
};

export const getLogin = (req, res) => {
	if (req.isAuthenticated()) {
		const { username } = req.user;
		res.render("home", { username });
	} else res.render("login");
};

export const postLogin = (req, res) => {
	const { username } = req.user;
	res.render("postLogin", { username });
};

export const getSignup = (req, res) => res.render("signup");

export const postSignup = (req, res) => {
	const { email, password, firstName, lastName, address, age, phone, image } =
		req.body;
	const response = {
		email,
		password,
		firstName,
		lastName,
		address,
		age,
		phone,
		image,
	};
	res.json({ response });
};
