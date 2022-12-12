import log4js from "log4js";

log4js.configure({
	appenders: {
		info: { type: "stdout" },
		warn: { type: "file", filename: "src/logs/warn.log" },
		error: { type: "file", filename: "src/logs/error.log" },
	},
	categories: {
		default: { appenders: ["info"], level: "info" },
		warn: { appenders: ["warn"], level: "warn" },
		error: { appenders: ["error"], level: "error" },
	},
});

export const logInfo = log4js.getLogger("info");

export const logWarn = log4js.getLogger("warn");

export const logError = log4js.getLogger("error");