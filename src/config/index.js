import dotenv from "dotenv";
dotenv.config({
	path: `./${process.argv[2]}.env`,
});

export const config = {
	NODE_ENV: process.env.NODE_ENV || "development",
	DATABASE: process.argv[4] || process.env.DATABASE,
	PORT: process.argv[3] || process.env.PORT,
	DB_NAME: process.env.DB_NAME,
	DB_PASS: process.env.DB_PASS,
	DB_USER: process.env.DB_USER,
	TOKEN: process.env.TOKEN,
	MAIL_FROM: process.env.MAIL_FROM,
	MAIL_TO: process.env.MAIL_TO,
	MAIL_PASS: process.env.MAIL_PASS,
};
