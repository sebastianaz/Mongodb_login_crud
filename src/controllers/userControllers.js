const userCtrl = {};

userCtrl.renderSigninForm =  (req,res)=>{
    res.render('users/signin');
}

userCtrl.signin = (req,res) =>{
    res.send('recibido tu info para validarte');
}

userCtrl.renderSignupForm = (req,res) =>{
    res.render('users/signup')
}

userCtrl.signup = (req,res) =>{
    res.send('tu info esta siendo validada para creacion de nuevo usuario')
}

userCtrl.logout = (req,res) => {
    res.redirect('/')
}

module.exports = userCtrl;
