const express = require('express');
const app = express();
const config = require('./config')
const PORT = config.getValue('PORT')
const postsRouter = require('./routes/posts.router');
const authRouter = require('./routes/auth.router')
// const passport = require('passport')
// require('./services/auth/passport-setup')

app.use(express.json())
app.use('/posts', postsRouter)
app.use('/auth', authRouter)

// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/',(req,res)=>res.send('Not logged in'))

// const isLoggedIn = (req,res,next) => {
//     if(!req.user){
//         res.json(req.user)
//         next()
//     }else{
//         res.json(req.user)
//         res.status(401).json('Error log')
//     }
// }

// app.get('/loggedin',isLoggedIn,(req,res)=>res.send(`You are successfully logged in ${req.user.displayName}`))
// app.get('/failed', (req,res) => res.send('Wrong initials'))

// app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
//     function(req, res) {
//     res.redirect('/loggedin');
// });
// app.get('/logout',(req,res)=>{
//     req.session = null
//     req.logout()
//     res.redirect('/')
// })

app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('500 server error')
})


app.listen(PORT,()=> console.log(`Hello.Im working at ${PORT} port`));