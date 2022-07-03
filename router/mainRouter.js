const express = require ("express");
const app = express();
const router = express.Router()
const mainController = require ("../controller/mainController")

router.get ("/", mainController.index)

router.get ("/detalle/:id", mainController.detalleMenu);




module.exports= router;