var log4js = require("log4js");
log4js.configure({
  appenders: {
    //everything: { type: 'file', filename: 'all-the-logs.log' }
    everything: { 
		type: 'stdout',
		layout: {
			type: 'pattern',
			pattern: '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %c - %m'
		}
	}
  },
  categories: {
    default: { appenders: [ 'everything' ], level: 'debug' }
  }
});

var logger = log4js.getLogger();
logger.debug("Some debug messages");
logger.info("info debug messages");
