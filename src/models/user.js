const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');


const SCHEMAUSERS = new Schema({
    name    :{type:String,require:true},
    email   :{type:String,require:true, unique:true},
    password:{type:String,require:true},
    date    :{type:Date ,default : Date.now}
});

SCHEMAUSERS.methods.encryptPassword = async(pass)=>{
    const saltCry   = await bcrypt.genSalt(10);
    const readyPass = await bcrypt.hash(pass,saltCry);
    return readyPass;
}

//requerir comparar contraseñas cifradas
SCHEMAUSERS.methods.matchPassword = async function(encrypass){
    return await bcrypt.compare(encrypass,this.password)
}

module.exports = model('usuarios', SCHEMAUSERS)
// este es el nombre con que trabaja la DataBase  ('xxx',SCHEMAUSERS)