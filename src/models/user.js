const {Schema, model} = require('mongoose');
const bcrypt = requiere('bcryptjs')


const SCHEMAUSERS = new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{tupe:String,require:true}
},{timestamps:true});

SCHEMAUSERS.methods.encrypPassword = async(pass)=>{
    const saltCry = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass,saltCry);
}

//requerir comparar contraseñas cifradas
SCHEMAUSERS.methods.matchPassword = async function(encypass){
    return await bcrypt.compare(encrypass,this.password)
}

module.exports = model('usuarios', SCHEMAUSERS)