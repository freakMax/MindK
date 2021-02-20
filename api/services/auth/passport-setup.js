// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const db = require('../db')
// const config = require('../../config')

// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(async function(id, done) {
//     const user = await db.query('SELECT * FROM users WHERE login = $1',[id])
//     if(!user.rowCount){
//         done(null,user);
//     }else{
//         done(null)
//     }
// });

// passport.serializeUser(function(user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//     done(null, user)
// });

// passport.use(new GoogleStrategy({
//     clientID: config.getValue('GOOGLE_CLIENT_ID'),
//     clientSecret: config.getValue('GOOGLE_CLIENT_SECRET'),
//     callbackURL: "https://localhost:3000/auth/google/callback"
// },
// async function(accessToken, refreshToken, profile, done) {
//     // const user = await db.query('SELECT * FROM users WHERE login = $1',[profile.id])
//     // if(!user.rowCount){
//     //     await db.query('')
//     console.log(profile)
//     return done(null, profile);
//     // }
// }
// ));