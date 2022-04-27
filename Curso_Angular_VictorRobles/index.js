const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;
require('./config/database.js');

// Settings
app.listen(PORT, () => console.log(`Running server on port ${PORT}`));

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS


// Routes
app.use('/projects', require('./routes/project.route'));


