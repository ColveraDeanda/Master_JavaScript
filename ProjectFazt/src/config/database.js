const mongoose = require('mongoose');

const URL = "mongodb://localhost:27017/notes-app";
const DB = "notes-app";

mongoose.Promise = global.Promise;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to database " + DB))
    .catch(err => console.log(err))