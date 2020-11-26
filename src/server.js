const express = require('express');
const path    = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const methodOverrride = require('method-override');
const session =require('express-session');
const flash =  require('connect-flash');
const router = require('./routes/user.routers');
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
app.use(session({
    secret: 'secret',
    resave : true,
    saveUninitialized : true
}))
app.use(flash());
//global variables
app.use((req,res,next)=>{
     res.locals.successMesage = req.flash('successMsg');
    next();
})

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.router'));
app.use(require('./routes/user.routers'));
//Static files
app.use(express.static(path.join(__dirname,'public')));

module.exports=app;