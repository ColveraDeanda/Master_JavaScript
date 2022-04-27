const mongoose = require('mongoose');

const URL = "mongodb://localhost:27017/portafolio"; 

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => { console.log('Connected to DB...'); },
    err => { console.log(err); }
);