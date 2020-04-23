const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/*const User = require('../models/Users');
const helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback : true
    },
    async (req, username, password, done) => {
        const user = await User.findByPk(username);
        if(user){
            const usuario = user.dataValues;
            const validPass = await helpers.matchPassword(password, usuario.password);
            if(validPass){
                done(null, usuario);
            }else{
                done(null, false, req.flash('message', 'Password incorrecto'));
            }
        }else{
            done(null, false, req.flash('message', 'Error de Usuario'));
        }
    }
));

passport.use('local.signup', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    async (req, username, password, done) => {
        const {fullname} = req.body;
        const encryptedPass = await helpers.encryptPassword(password);
        try{
            const newUser = await User.create({
                username: username, 
                password: encryptedPass, 
                fullname: fullname
            });

            return done(null, newUser.dataValues);
        }catch(e){
            done(null, false);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser(async (user, done) => {
    const userFound = await User.findByPk(user.username);
    done(null, userFound);
})*/