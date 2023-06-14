// Importar los módulos necesarios
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const passportJWT = require('passport-jwt');

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
const User = sequelize.define('User', {
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
sequelize.sync()
  .then(() => {
    console.log('Base de datos y tablas creadas');
  })
  .catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
  });

  //------------------------------------------------------------------------------------------
// Configurar la estrategia JWT
//proporcionado por el módulo passport-jwt:
const JWTStrategy = passportJWT.Strategy; //que permite verificar y autenticar tokens JWT.
const ExtractJWT = passportJWT.ExtractJwt; // extrae el token JWT de la solicitud HTTP

//Se utiliza el objeto passport para configurar una nueva estrategia llamada "jwt" 
passport.use('jwt', new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), //para extraer el token del encabezado de autorización en formato "Bearer Token"
    secretOrKey: 'secretKey', //secretOrKey es la clave utilizada para verificar la firma del token JWT
  },
  (jwtPayload, done) => { //se ejecutará cuando se autentique un token JWT
    ////jwtPayload es el contenido decodificado del token JWT
    //done es una función de devolución de llamada que se invoca para indicar el resultado de la autenticación
    User.findOne({ where: { id: jwtPayload.id } }) //En el modelo "User" busca el id presente en jwtPayload
      .then((user) => {
        if (user) {
          return done(null, user); //retorna el usuario si la autenticación ha tenido éxito
        }
        return done(null, false);
      })
      .catch((error) => {
        return done(error, false);
      });
  }
));
//------------------------------------------------------------------------------------------
// Configurar Express y sus middlewares
const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());


//-------------------------------------RUTAS-------------------------------------------------

// ----------  Ruta de registro de usuario---------- 
app.post('/register', async (req, res) => {
  try {
    const existingUser = await User.findOne( // usa el ORM para buscar en el modelo User
      { where: { username: req.body.username } 
    }); 
    if (existingUser) {
      return res.status(409).json({ message: 'El usuario ya existe' });
    }

    const newUser = await User.create({ // usa el ORM para crear el usuario si no existe
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10), //encripta el password
    });

    return res.status(201).json({ message: `Usuario ${newUser.username} registrado exitosamente` });
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
});

//----------  Ruta de inicio de sesión ---------- 
app.post('/login', (req, res) => {
  User.findOne({ where: { username: req.body.username } }) // buscar el usuario con el ORM
    .then((user) => {
      if (!user) { 
        return res.status(401).json({ message: 'Inicio de sesión fallido' });
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => { // si lo encuentra desencripta la contraseña
        if (err || !result) {
          return res.status(401).json({ message: 'Inicio de sesión fallido' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, 'secretKey', { expiresIn: '1h' }); //genera token

        return res.status(200).json({ token }); //retorna el token
      });
    })
    .catch((error) => {
      return res.status(500).json({ message: 'Error en el servidor' });
    });
});


// ---------- ruta protegida --------------------  
// Proteger una ruta con JWT middleware
// 'jwt' es la estrategia de autenticación previamente configurada
app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => { 
  return res.status(200).json({ message: 'Acceso permitido' });
});
//------------------------------------------------------------------------------------------
// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});
