const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const users = require('./routes/users');
const rentals = require('./routes/rentals');

if (!config.get('PRIVATE_KEY')) {
  console.error('FATAL ERROR: jwt key is not defined');
  process.exit(1);
}
/** Creating an express application */
const app = express();

/** Middleware */
app.use(express.json());
app.use('/api/auth', auth);
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);

/** Suppressing mongoose strictQuery off */
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://vidly:vidly@cluster0.6pstfgo.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected to vidly db'))
  .catch(err => console.error('Could not connect to vidly db' + err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Started Development Server: http://localhost:${port}`));