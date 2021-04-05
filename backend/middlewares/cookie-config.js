

// Importation du package express-session
const expressSession = require('express-session');

// Middleware gestion des cookies
const session = {
        secret: process.env.COOKIE_SECRET, //utilisation d'une variable d'environnement
        resave: false,  //évite l'enregistrement inutile d'info si pas de changement
        saveUninitialized: false, //évite l'enregistrement inutile d'info si pas de changement
        cookie: { 
                path: '/', //racine du domaine
                httpOnly: true, //interdit l'utilisation du cookie côté client
                secure: true,
                maxAge: 86400000, // expiration au bout de 24h
                sameSite: 'strict' //application sur le site strictement
        }
};

module.exports = expressSession(session);
