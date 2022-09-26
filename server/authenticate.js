import * as OAuth2Strategy from 'passport-oauth2'
import config from './config'

export const FacebookTokenStrategy = passport.use(new OAuth2Strategy({
    authorizationURL: "",
    tokenURL: "",
    clientID: config.facebook_clientId,
    clientSecret: config.facebook_clientSecret
}));

export const GoogleTokenStrategy = passport.use(new OAuth2Strategy({
    authorizationURL: "",
    tokenURL: "",
    clientID: config.google_clientId,
    clientSecret: config.google_clientSecret
}));

export const GitHubTokenStrategy = passport.use(new OAuth2Strategy({
    authorizationURL: "",
    tokenURL: "",
    clientID: config.github_clientId,
    clientSecret: config.github_clientSecret
}));
export const LocalTokenStrategy = passport.use()
