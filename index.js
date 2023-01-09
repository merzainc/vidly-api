const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const users = require('./routes/users');
const rentals = require('./routes/rentals');

/** Creating an express application */
const app = express();

/** Middleware */
app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);

/** Suppressing mongoose strictQuery off */
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/vidly')
  .then(() => console.log('Connected to vidly db'))
  .catch(err => console.error('Could not connect to vidly db' + err));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Started Development Server: http://localhost:${port}`));