import { createLogger, format, transports } from "winston";

const customLogger = createLogger({
  transports: [
    new transports.File({
      filename: "log/project_info.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "log/project_error.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "log/project_debug.log",
      level: "debug",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.Console({
      level: "debug",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});
// console.log("custom logger ", customLogger);
export default customLogger;
