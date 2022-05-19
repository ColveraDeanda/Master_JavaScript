const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/practica';

mongoose.connect(URL, (err) => {
    if(err) return err;
    console.log('Connected to DB succesfully');
});