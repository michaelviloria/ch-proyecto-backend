export const error404 = (req, res, next) => {
	const message = {
		error: 404,
		descripcion: `ruta ${req.url} y metodo ${req.method} no estan implementados`,
	};
	if (req.url !== "/" || (req.url === "/" && req.method !== "GET")) {
		res.status(404).json(message);
	} else {
		next();
	}
};

export const admin = {
	access: true,
	admin(req, res, next) {
		const { admin } = req.body;

		if (admin === admin.access) {
			// req.body.admin = "true";
			next();
		} else {
			// req.body.admin != "true";
			res.status(404).json({ error: "Acceso no autorizado" });
		}
	},
};

export const isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.redirect("/");
	}
};
