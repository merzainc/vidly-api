# Introduction
Vidly API - This project is the backend of vidly, an imaginary video rental app.

To view front-end app demo for this api click here, [Vidly Demo](https://merzainc.github.io/vidly).

I built this api from Mosh Hamedani's [Complete Node Course](https://codewithmosh.com/p/the-complete-node-js-course) course using latest versions of the packages and dependencies. I created it if you prefer an updated version of the api. Also, will continue to maintain to stay up to date.

## Requirements

To run this app you need the meet the following requirements: 

1. MongoDB version `6.0.0` 
2. Node version `18.12.0` 
3. Npm version `9.2.0`

You can use MongoDB Community Edition follow [mongodb docs](https://docs.mongodb.com/manual/installation/) to run app.

## Setup
Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

### Install dependencies

From the project folder, install the dependencies:

    npm i

### Populate the database

    node seed.js

### Run the tests

You're almost done! Run the tests to make sure everything is working:

    npm test

All tests should pass.

### Start the server

    node index.js

### To start server and monitor for changes use

    nodemon

This will launch the Node server on port 3900. If that port is busy, you can set a different point in config/default.json.

Open up your browser and head over to:

http://localhost:3900/api/genres

You should see the list of genres. That confirms that you have set up everything successfully.

## Environment Variables

If you look at config/default.json, you'll see a property called JWT_KEY. This key is used to encrypt JSON web tokens. So, for security reasons, it should not be checked into the source control. You can set a default value here to make it easier for you to get up and running with this project. For a production scenario, you should store this key as an environment variable.


### Incase of no defaults (production scenario)

On Mac/Linux

    export JWT_KEY=your-private-key

    export MONGO_URL=your-db-url

On Windows

    set JWT_KEY=your-private-key

    set MONGO_URL=your-db-url

## Learn More

You can learn more in the [Complete Node Course](https://codewithmosh.com/p/the-complete-node-js-course) course, were this api was developed as an example.

To learn React, check out this course [Mastering React](https://codewithmosh.com/p/mastering-react), were you can learn to develop front-end app for this api.




