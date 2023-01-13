const winston = require('winston');
const logger = require('../utils/logger');
const mongoose = require('mongoose');
const config = require('config');


module.exports = function () {
    /** Suppressing mongoose strictQuery off */
    mongoose.set('strictQuery', true);
    mongoose.connect(config.get('MONGO_URI'), { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => logger.info('Connected to vidly db'));
}