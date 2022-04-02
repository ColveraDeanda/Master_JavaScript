const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);


// Se configura el motor de plantilla
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main', // Fichero principal
    layoutsDir: path.join(__dirname, './views/layouts'),  // Path de carpeta layouts.
    partialsDir: path.join(__dirname, './views/partials'), // Para cargar vistas en distintas partes.
    extname: '.hbs'
}));
app.set('view engine', '.hbs'); // Se carga nuestro motor de plantilla



// Middlewares 
app.use(express.urlencoded({extended: false})) // Sirve para recibir la data del user. False = solo data, y no imagenes o demas...
app.use(methodOverride('_method')); // Sirve para que el form acepte los metodos tipicos (post, get, delete, put)



// Global variables

// Routes

// Static Files 

// Server
app.listen(app.get('port'), () => console.log(`Server listening on PORT ${app.get('port')}`))