const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

//------------------------------------------------------------------------------------------
// Crear la instancia de Sequelize para la conexión a la base de datos
const sequelize = new Sequelize('logindb', 'root', '123456789', 
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
//------------------------------------------------------------------------------------------
// Definir el modelo de Usuario
const User = sequelize.define('Usersjwt', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
//------------------------------------------------------------------------------------------
// Sincronización del modelo con la base de datos (parecido a la migración)
const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log('Base de datos y tablas creadas');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};
syncDatabase();
console.log("*****************************************************************************")
//------------------------------------------------------------------------------------------

const app = express();
app.use(bodyParser.json());

app.get("/api", (req, res)=>{
  res.json(
    {
      mensaje: "hola"
    }
  )
})

app.post('/api/register', async (req, res) => {
  try {
    const existingUser = await User.findOne( // usa el ORM para buscar en el modelo User
      { 
        where: { username: req.body.username } 
      }
    ); 
    if (existingUser) {
      return res.status(409).json({ message: 'El usuario ya existe' });
    }

    const newUser = await User.create({ // usa el ORM para crear el usuario si no existe
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10), //encripta el password
    });

    return res.status(201).json({ message: `Usuario  registrado exitosamente` });
  } catch (error) {
    console.log("**********ERROR********** "+error)
    return res.status(500).json({ message: 'Error en el servidor' });
  }
});


//----------  Ruta de inicio de sesión ---------- 
app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } }); // buscar el usuario con el ORM
    if (!user) {
      return res.status(401).json({ message: 'Inicio de sesión fallido' });
    }
    bcrypt.compare(req.body.password, user.password, (err, result) => { // si lo encuentra desencripta la contraseña
      if (err || !result) {
        return res.status(401).json({ message: 'Inicio de sesión fallido' });
      }

      jwt.sign({ username: user.username }, 'secretKey', { expiresIn: 120 }, (err, token) => {
        return res.status(200).json({ token: token }); //retorna el token
      });
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
});


app.get('/protected', (req, res) => {
  try {
    const bearerToken = req.headers["authorization"].split(" ")[1];
    
    if (typeof bearerToken === "undefined") {
      return res.sendStatus(403);
    }
    jwt.verify(bearerToken, "secretKey", (error) => {
      if (error) {
        return res.status(403).json({ error: error.message });
      } else {
        return res.status(200).json({ mensaje: "Acceso permitido" });
      }
      });
  } catch (error) {
    
    console.log("**********ERROR********** " + error);
    return res.status(500).send({ error: error.message });
  }
});



app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});