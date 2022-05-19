const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

require('./config/db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Routes
app.use('/user', require('./routes/user.route'));



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));