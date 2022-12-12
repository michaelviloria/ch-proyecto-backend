import { logInfo, logWarn } from "../utils/logs.js";

export class LogRutes {
	info() {
		const infoRutes = (req, res, next) => {
			logInfo.info(`\nRute --> ${req.url} \nMethod --> ${req.method}`);
      next();
		};
    return infoRutes;
	}

  warn() {
    const warnRutes = (req, res, next) => {
      logWarn.warn(`Rute --> ${req.url} & Mthod --> ${req.method} have not been implemented`)
      next();
    }
    return warnRutes;
  }
}
