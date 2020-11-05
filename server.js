'use strict'

// const  static  = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.static('./puplic'));

// app.get('/',(request, reponse )=>{
//    reponse.status(200).send('Hello there');
// })

app.use('*', (request, response) => response.send('sorry'));

app.get('/about',(request, reponse )=>{
    reponse.status(200).send('Hello there and gg');
 })
app.listen (PORT, ()=>{
    console.log(`listen ${PORT}`);
})