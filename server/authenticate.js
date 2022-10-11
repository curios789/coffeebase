import * as OAuth2Strategy from 'passport-oauth2'
import config from './config.js'
import passport from 'passport';
import User from './models/users.cjs';
import * as PassportJwt from 'passport-jwt';
import * as LocalStrategy from 'passport-local';
import jsonwebtoken from 'jsonwebtoken';
const JwtStrategy = PassportJwt.Strategy;
const ExtractJwt = PassportJwt.ExtractJwt;

export const LocalTokenStrategy = passport.use(new LocalStrategy.Strategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
export const getToken = function (user) {
    return jsonwebtoken.sign(user, config.secretKey, { expiresIn: 3600 });
};
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;
export const jwtPassport = passport.use(new JwtStrategy(
    opts,
    (jwt_payload, done) => {
        console.log('JWT payload:', jwt_payload);
        User.findOne({ _id: jwt_payload._id }, (err, user) => {
            if (err) {
                return done(err, false);
            } else if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }
))
/*
export const FacebookTokenStrategy = passport.use(new OAuth2Strategy.Strategy({
    authorizationURL: "",
    tokenURL: "",
    clientID: config.facebook_clientId,
    clientSecret: config.facebook_clientSecret
}, async function (accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    console.log(done);
}));

export const GoogleTokenStrategy = passport.use(new OAuth2Strategy.Strategy({
    authorizationURL: "",
    tokenURL: "",
    clientID: config.google_clientId,
    clientSecret: config.google_clientSecret
}, async function (accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    console.log(done);
}));

export const GitHubTokenStrategy = passport.use(new OAuth2Strategy.Strategy({
    authorizationURL: "",
    tokenURL: "",
    clientID: config.github_clientId,
    clientSecret: config.github_clientSecret
}, async function (accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    console.log(done);
}));
*/