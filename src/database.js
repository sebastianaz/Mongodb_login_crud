
const mongoose = require('mongoose');
const{DB_NOTES_HOST,DB_NOTES_NAME} = process.env

const MONGO_URI = `mongodb://${DB_NOTES_HOST}/${DB_NOTES_NAME}`;


mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true

})
    .then((db)=>{
        console.log('connected DB')
    })
    .catch((er)=>{
        console.log(er)
    })