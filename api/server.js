const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT,()=> console.log(`Hello.Im working at ${PORT} port`));
app.get('/',(req,res)=>res.send('Im from GET'));