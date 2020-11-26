const {Router} = require('express');
const router = Router();

const {renderSigninForm,
       signin,
       renderSignupForm,
       signup,
       logout} = require('../controllers/userControllers');


//solicita formulario de entrada
router.get('/user/signin', renderSigninForm );
// recibe y aprueva datos de entrada
router.post('/user/signin', signin);
// solicita formulario para crear nuevo usuario
router.get('/user/signup', renderSignupForm);
// recibe y guarda info de nuevo user
router.post('/user/signup',signup);
// cierre de session
router.get('/user/logout', logout);



module.exports = router; 