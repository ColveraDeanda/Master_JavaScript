const mongoose = require('mongoose');
const app = require('./app')

// DB 
const URL = "mongodb://localhost:27017/todos";
const PORT = process.env.PORT || 3000;
const DB = "todos";

mongoose.Promise = global.Promise;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to database " + DB);
        app.listen(PORT, () => {
            console.log("Running server on port " + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });