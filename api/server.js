const express = require('express');
const app = express();
const PORT = 3000
const postsRouter = require('./routes/posts.router');
const authRouter = require('./routes/auth.router')

app.use(express.json())
app.use('/posts', postsRouter);
app.use('/auth', authRouter)

app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('500 server error')
})


app.listen(PORT,()=> console.log(`Hello.Im working at ${PORT} port`));
