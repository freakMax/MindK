const express = require('express');
const app = express();
const config = require('./config')
const PORT = config.getValue('PORT')
const postsRouter = require('./routes/posts.router');
const authRouter = require('./routes/auth.router')
<<<<<<< HEAD
// const passport = require('passport')
// require('./services/auth/passport-setup')

app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})
app.use('/posts', postsRouter)
app.use('/auth', authRouter)
app.use('/',(req,res)=> res.send('Youngsters'))



app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('500 server error')
})


app.listen(PORT,()=> console.log(`Hello.Im working at ${PORT} port`));

