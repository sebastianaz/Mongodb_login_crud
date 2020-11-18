const {Schema,model} = require('mongoose');


//Schema({esquema},{config})
const NOTESSCHEMA = new Schema({
    tittle:{
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

module.exports =  model('notas',NOTESSCHEMA);