const express = require('express');
const path    = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const methodOverrride = require('method-override');
//initialize
const app = express();
//settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'))
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}))
app.set('view engine','.hbs');
//middlewares
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(methodOverrride('_method'))
//global variables

//Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.router'))
//Static files
app.use(express.static(path.join(__dirname,'public')));

module.exports=app;