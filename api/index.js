const express = require("express");

const index = require('./routes/index');
const twitter = require('./routes/twitter');
const instagram = require('./routes/instagram');

const logger = require('./middleware/logger')

// Initiate an express instance
const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()  => console.log(`Server listening on port ${PORT}`));

/* 
    MIDDLEWARE
*/

// Logging route + timestamp
app.use(logger);

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*
    ROUTES
*/

// Simple api routes
app.use('/api', index);

// Twitter updates related routes
app.use('/api/twitter', twitter);

// Instagram updates related routes
app.use('/api/instagram', instagram);