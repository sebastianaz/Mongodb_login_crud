const app = require('./server');

app.listen(app.get('port'),()=>{
    console.log('listen on port ',app.get('port'))
})