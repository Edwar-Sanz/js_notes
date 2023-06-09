// npm init --yes
// npm install express

const express = require("express"); // importar express
const userRoutes = require("./routes/apiRoutes"); // importar rutas

const app = express();   //crear app
app.use(express.json()); //
app.use("/", userRoutes); //asocia a "/" las rutas de la api

const PORT = process.env.PORT || 8080; //puerto asignado o 8080
app.listen(PORT, 
  ()=>{console.log(`server running on port ${PORT}`)}  
);

