const express = require('express');
const app = express();
const config = require('./config.js')
const PORT = config.getPort('PORT',3000)

app.get('/',(req,res)=>res.send('Main page'));
app.get('/error',(req,res) => res.send(error()))

app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('500 server error')
})

app.listen(PORT,()=> console.log(`Hello.Im working at ${PORT} port`));
