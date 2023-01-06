import dotenv from "dotenv";
dotenv.config({
	path: `./${process.argv[2]}.env`,
});

export const config = {
	NODE_ENV: process.env.NODE_ENV || "development",
	DATABASE: process.argv[4] || process.env.DATABASE,
	PORT: process.argv[3] || process.env.PORT,
	MAIL_FROM: process.env.MAIL_FROM,
	MAIL_PASS: process.env.MAIL_PASS,
};
