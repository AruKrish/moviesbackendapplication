const { createLogger, format, transports } = require("winston");

module.exports =function(){
  createLogger({
  transports: [
    new transports.File({
      filename: "logfile.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "uncaughtExceptions",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});
}