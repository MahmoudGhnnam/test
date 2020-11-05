'use strict'

// const  static  = require('express');
const express = require('express');
const app = express();
const PORT = 3030;

app.use(express.static('./puplic'));

// app.get('/',(request, reponse )=>{
//    reponse.status(200).send('Hello there');
// })

app.get('/about',(request, reponse )=>{
    reponse.status(200).send('Hello there and gg');
 })
app.listen (PORT, ()=>{
    console.log(`listen ${PORT}`);
})