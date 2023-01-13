require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const logger = require('../utils/logger');


process.on('uncaughtException', (ex) => {
    logger.error(ex.message, ex);
    process.exit(1);
});


logger.exceptions.logger.add(
    new winston.transports.File({
        filename: 'uncaughtExceptions.log',
        level: 'error'
    }));

// .add(
//         new winston.transports.MongoDB({
//             db: 'mongodb://localhost/vidly',
//             options: { useUnifiedTopology: true }, level: info, storeHost: true
//         }));    
