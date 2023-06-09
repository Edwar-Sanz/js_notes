/*
  los modelos representan una tabla 
  en la base de datos

*/

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'prueba_express', 'root', '123456789', 
  {
  host: 'localhost',
  dialect: 'mysql'
  }
);

// Definición del modelo
const UserModel = sequelize.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Sincronización del modelo con la base de datos(parecido a la migracion)
// sequelize.sync()
//   .then(() => {
//     console.log('Base de datos y tablas creadas');
//   })
//   .catch(error => {
//     console.error('Error al sincronizar la base de datos:', error);
//   });




module.exports = {UserModel};