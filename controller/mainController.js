const path = require ("path")
const comidas = require("../comidas")

const mainController = {
    index: function (req,res){
        console.log("un usuario ingreso al index")
        res.render ("index.ejs")
    },

    detalleMenu:function (req,res){
        console.log("un usuario ingreso al detalle")
        res.render ("detalleMenu.ejs", {comidas:comidas} )
    },


}

module.exports = mainController;
/*
path.join (__dirname, "../views/
(path.join (__dirname, "../views/
*/