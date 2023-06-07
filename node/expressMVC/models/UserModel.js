/*
  los modelos representan una tabla 
  en la base de datos

*/

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'asd', 'root', '123456789', 
  {
  host: 'localhost',
  dialect: 'mysql'
  }
);

// Definición del modelo
const UserModell = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// Sincronización del modelo con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Base de datos y tablas creadas');
  })
  .catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
  });

// Uso del modelo
UserModell.create({ firstName: 'John', lastName: 'Doe' })
  .then(user => {
    console.log('Usuario creado:', user.toJSON());
  })
  .catch(error => {
    console.error('Error al crear el usuario:', error);
  });



let USER_FAKE_DATA = [
  {
    id: 1,
    name: "User 1",
    email: "email@email.com",
    password: "password",
    role: "admin",
    status: "active",
  },
  {
    id: 2,
    name: "User 2",
    email: "email@email.com",
    password: "password",
    role: "user",
    status: "active",
  },
  {
    id: 3,
    name: "User 3",
    email: "askdsjlshd@gmail.com",
    password: "password",
    role: "user",
    status: "active",
  },
];

module.exports = { USER_FAKE_DATA };