var log4js = require("log4js");
log4js.configure({
  appenders: {
    everything: { type: 'file', filename: 'all-the-logs.log' }
  },
  categories: {
    default: { appenders: [ 'everything' ], level: 'debug' }
  }
});
var logger = log4js.getLogger();
logger.debug("Some debug messages");
logger.info("info debug messages");
