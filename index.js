const express = require('express');
const logger = require('./utils/logger');
const config = require('config');

/** Creating an express application */

const app = express();
require('./start/logging');
require('./start/db')();
require('./start/routes')(app);
require('./start/config')();
require('./start/validation')();
// require('./start/prod')(app);

const port = process.env.PORT || config.get('PORT');
app.listen(port, () => logger.info(`Listening on: http://localhost:${port}`));