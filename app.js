const express = require ("express");
const app = express()
const router= require ("./router/mainRouter")
const path = require("path");

app.use(express.static(__dirname + '/public')); //le decimos que la carpeta public (que contiene el css y las imagenes) va a ser estatico. IMPORTANTE PARA QUE FUNCIONE

app.set ("view engine","ejs");

app.listen (3000,function (){
    console.log ("servidor funcionando")
});

app.use ("/", router);
