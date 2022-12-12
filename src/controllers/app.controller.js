export class AppController {
	getHome = (req, res) => {
		res.redirect("/api/products");
	};

	getLogin = (req, res) => {
		res.json({
			title: "Form Login",
			send_data_to: "Method: POST | Rute: /login",
			data: {
				email: "String",
				password: "String",
			},
			new_users: "/register",
		});
	};

	postLogin = (req, res) => {
		res.json({
			title: "Successful login",
		});
	};

	getLoginFailed = (req, res) => {
		res.json({
			message: req.session.messages[req.session.messages.length - 1],
		});
	};

	getRegister = (req, res) => {
		res.json({
			title: "Form Register",
			send_data_to: "Method: POST | Rute: /register",
			data: {
				firstname: "String",
				lastname: "String",
				phone: "String",
				email: "String",
				password: "String",
			},
		});
	};

	postRegiter = (req, res) => {
		res.json({
			message: "Signup successful",
			user: req.user,
		});
	};

	getRegisterFailed = (req, res) => {
		res.json({
			message: req.session.messages[req.session.messages.length - 1],
		});
	};

	getLogout = async (req, res, next) => {
		await req.logout((err) => {
			if (err) return next(err);
			res.redirect("/");
		});
	};
}
