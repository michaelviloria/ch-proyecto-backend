import * as dotenv from "dotenv";
dotenv.config({
	path: `src/config/${process.argv[2]}.env`,
});

console.log(process.argv[2]);
console.log(process.env.NODE_ENV);
console.log(process.env.DATABASE);

export const config = {
	NODE_ENV: process.env.NODE_ENV || "development",
	DATABASE: process.argv[4] || process.env.DATABASE,
	PORT: process.argv[3] || process.env.PORT,
	MAIL_FROM: process.env.MAIL_FROM,
	MAIL_PASS: process.env.MAIL_PASS,
};
