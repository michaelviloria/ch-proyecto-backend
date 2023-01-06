import nodemailer from "nodemailer";
import { logInfo } from "./logs.js";
const config = require("../config/index.js");

export async function mailing(mail, subject, html) {
	let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false,
		auth: {
			user: config.MAIL_FROM,
			pass: config.MAIL_PASS,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	let info = await transporter.sendMail({
		from: config.MAIL_FROM,
		to: (await mail),
		subject: await subject,
		html: await html,
	});

	logInfo.info(info);
}
