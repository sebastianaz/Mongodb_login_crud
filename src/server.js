const express = require('express');
const path    = require('path');
//initialize
const app = express();
//settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'))

//middlewares
app.use(express.urlencoded({extended:false}));
//global variables

//Routes
app.get('/',(req,res)=>{
    res.send('hola mundo!!');
})
//Static files
app.use(express.static(path.join(__dirname,'public')));

module.exports=app;