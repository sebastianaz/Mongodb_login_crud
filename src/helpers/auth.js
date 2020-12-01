const helpers = {};

helpers.isAuthenticated = (req,res,next)=>{
   if (req.isAuthenticated()){
      return next();
   };
   req.flash('errorsMsg', 'No estas Autorizado, porfavor has Login')
   res.redirect('/user/signin')

}

module.exports = helpers;