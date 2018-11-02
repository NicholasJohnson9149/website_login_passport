const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user,done)=> {
    done(null, user.id);
})

passport.deserializeUser((id,done)=> {
    User.findById(id).then((user)=> {
        done(null, user);
    })
})

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // Check is user already exsist in our db
        console.log(profile);
        User.findOne({googleid: profile.id}).then((currentUser)=>{
            if(currentUser){
                // user already exist log them in and don't add to db
                console.log('user is:', currentUser);
                done(null, currentUser);
            }else{
                // if user is not in our db create a new one
                new User({
                    username: profile.displayName,
                    googleid: profile.id,
                    thumbnail: profile._json.image.url,
                    gender: profile.gender,
                    provider: profile.provider,
                    location: profile._json.placesLived
                }).save().then((newUser) => {
                    console.log('new user created:', newUser);
                    done(null, newUser);
                });
            } 
        })
    })
);

