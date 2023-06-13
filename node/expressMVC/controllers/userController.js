/*
  Los controladores manejan la lógica 
  de la aplicación para una determinada ruta.
*/
const {UserModel} = require("../models/UserModel"); //importar modelo

// -------------------- User Controler ----------------------------

// ----------read
const getAllUsers = async (req, res) => {
  try{
    const users = await UserModel.findAll();
    res.send(users);
  }catch(error){
    console.error('Usuario no encontrado:', error);
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
};

const getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findAll({
      where: {id: id}
    });
    user.length === 0 ?  res.send("no encontrado") : res.send(user) 
  } catch (error) {
    console.error('Usuario no encontrado:', error);
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
};

// ---------create
const  addUser = async (req, res) => {
  try {
    const userName = req.body.userName;
    const newUser = await UserModel.create({ userName: userName });
    res.status(201).json(newUser);
    // console.log("*** este es el nuevo usuario:  " + newUser);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// ---------update
const updateUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const userName = req.body.userName;

    const userUpdated = await UserModel.update(
      { userName: userName },
      {where: {id: id}}
    );
    res.status(202).json(userUpdated);
  } catch (error) {
    console.error('No se pudo actualizar:', error);
    res.status(400).json({ error: 'Error al actualizar usuario' });
  }
};

// ---------delete
const deleteUser = async (req, res) => {
  try{const id = req.params.id;
  const userDelete = await UserModel.destroy(
    { where: {id: id }
  });
  res.status(200).json(userDelete);
  }catch(error){
    console.error('No se pudo borrar:', error);
    res.status(400).json({ error: 'Error al borrar usuario' });
  }
};

//-------export
module.exports = {
  getAllUsers, getUsersById,
  addUser, updateUsersById, deleteUser
};
