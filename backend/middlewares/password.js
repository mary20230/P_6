const password = require('../models/password');


module.exports = (req, res, next) => {
    if(!password.validate(req.body.password)) {
        return res.status(400).json({ error : 'Mot de passe pas assez fort !'+ password.validate(req.body.password,)})
    } else{
        next();
    }
};