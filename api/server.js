const express = require('express');
const app = express();
const PORT = process.env.PORT

app.get('/',(req,res)=>res.send('Main page'));
app.get('/error',(req,res) => res.send(error()))
app.get('/getToken',(req,res) => res.send(process.env.TOKEN))

app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('500 server error')
})

app.listen(PORT,()=> console.log(`Hello.Im working at ${PORT} port`));
