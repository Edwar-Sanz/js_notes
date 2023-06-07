/*
  las rutas Las rutas son responsables de mapear las URL 
  a acciones específicas dentro de la aplicación. 
*/

const express = require("express");
const router = express.Router();

const { GetAllUsers} = require("../controllers/userController"); // importa los controladores

router.get("/users", GetAllUsers); // asocia la ruta con el controlador


module.exports = router;