const userCtrl = {};
const userModel = require('../models/user');
const passport = require('passport');

userCtrl.renderSigninForm =  (req,res)=>{
    res.render('users/signin');
}

userCtrl.signin = passport.authenticate('local',{
    failureRedirect: '/user/signin' ,
    successRedirect: '/notas',
    failureFlash: true
})


userCtrl.renderSignupForm = (req,res) =>{
    res.render('users/signup')
}

userCtrl.signup = async (req,res) =>{
    const errors = [];
    const {name,email,password, confirmPassword} = req.body;
    if(password != confirmPassword){
        errors.push({text:'password no match'});
    }
    if(password.length < 4){errors.push({text: 'debes introducir una contraseña mas larga'})
    }
    if(errors.length > 0){
        res.render('users/signup',{
            errors,
            name,
            email})
    }else{
        const emailUser = await userModel.findOne({email:email})
        if(emailUser){
            req.flash('errorsMsg', 'El Email ya esta en uso')
            res.redirect('/user/signup')
        }else{
            const newUser = new userModel({name,email,password})
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save((err,result)=>{
                if(err){
                    req.flash('errorsMsg','Hemos tenido problemas de coneccion porfavor intenta de nuevo')
                    res.redirect('/user/signup')
                }else{
                    req.flash('successMsg','Tu usuario se ha registrado corectamente');
                    res.redirect('/user/signin');
                }
            });   
        }
    }  
}

userCtrl.logout = (req,res) => {
    res.redirect('/')
}

module.exports = userCtrl;
