const express = require('express');
const app = express();
const config = require('./config.js')

app.get('/',(req,res)=>res.send('Main page'));
app.get('/error',(req,res) => res.send(error()))

app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('500 server error')
})

app.listen(config.PORT,()=> console.log(`Hello.Im working at ${config.PORT} port`));
