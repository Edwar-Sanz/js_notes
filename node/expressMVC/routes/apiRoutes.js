/*
  las rutas Las rutas son responsables de mapear las URL 
  a acciones específicas dentro de la aplicación. 
*/
//--------------  importa modulos ----------------------
const express = require("express");
const router = express.Router();

//--------------  importa los controladores ----------------------
const { 
  getAllUsers, getUsersById, 
  addUser, updateUsersById, deleteUser
} = require("../controllers/userController");  


//------------ asocia la ruta con el controlador---------------
//create
router.post ("/adduser" , addUser);
//read
router.get  ("/users"   , getAllUsers);
router.get  ("/user/:id", getUsersById);
//update
router.patch("/update/user/:id", updateUsersById);
//delete
router.delete("/delete/user/:id", deleteUser);


module.exports = router;