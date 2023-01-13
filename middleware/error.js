const { logger } = require('../utils/logger');

module.exports = function (err, req, res, next) {
    logger.info(err.message, err.stack);
    res.status(500).send('Something failed');
}