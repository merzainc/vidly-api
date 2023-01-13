const express = require('express');
const logger = require('./utils/logger');

/** Creating an express application */

const app = express();
require('./start/logging');
require('./start/db')();
require('./start/routes')(app);
require('./start/config')();
require('./start/validation')();


const port = process.env.PORT || 8000;
app.listen(port, () => logger.info(`Listening on: http://localhost:${port}`));