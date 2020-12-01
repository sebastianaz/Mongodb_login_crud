const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const userModel = require('../models/user');

passport.use(new localStrategy({
   usernameField:'email',
   passwordField: 'password'
}, async(email,password,done)=>{
   //do user's email exist?
   const user = await userModel.findOne({email});
   if (!user){
      return done(null,false,{message:'no se encontro el usuario'})
   }else{//is user's password correct?
      const match = await user.matchPassword(password);
      console.log(match);
      if(match){
         return done(null,user)
      }else{
         return done(null,false,{message: ' Te Contrasseña equivocada '})
      }
   }
}));

passport.deserializeUser((id,done)=>{
   userModel.findById(id,(err,result)=>{
      done(err,result);
   }
)})

passport.serializeUser((user,done)=>{
   done(null,user.id)
})