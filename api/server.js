const express = require('express');
const app = express();
const config = require('./config.js')
const PORT = config.getPort('PORT',3000)
const postsRouter = require('./routes/posts.router');

app.use(express.json())
app.use('/posts', postsRouter);


app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('500 server error')
})


app.listen(PORT,()=> console.log(`Hello.Im working at ${PORT} port`));
