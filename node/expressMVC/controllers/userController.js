/*
  Los controladores manejan la lógica 
  de la aplicación para una determinada ruta.
*/
const {USER_FAKE_DATA} = require("../models/UserModel");

const GetAllUsers = (req, res) => {
  res.send(USER_FAKE_DATA)
};

module.exports = {
  GetAllUsers
};