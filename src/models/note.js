const {Schema,model} = require('mongoose');


//Schema({esquema},{config})
const NOTESSCHEMA = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type: String,
        require: true
    }},
    {
        timestamps: true
    }
)

module.exports =  model('nota',NOTESSCHEMA);