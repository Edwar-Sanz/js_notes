// importando express
const express = require("express");
const app = express(); // creando la app

//importando los datos del ejemplo
const {datos} = require("./datos.js");


//-----routers-----
const pathProfessors = express.Router();
app.use("/api/datos/professors", pathProfessors);

//------routing----------------------------------------------------------

//----------- manejando el metodo get--------------------------------
app.get("/",(req, res)=>{res.send("Api Home")});

// enviando los datos
app.get("/api/datos",(req, res)=>{res.send(JSON.stringify(datos))});

//--------parámetros en la URL-----------------------------------

// parámetros en la URL, con los dos puntos crea
// un parámetro en la url para acceder a las propiedades de los datos
pathProfessors.get("/:id",
  (req, res)=>{
    const id = req.params.id //parámetro de la url
    const professor = datos.professors.filter(item => item.id === Number(id)); // filtrando todos los que sean iguales al parámetro
   
    // manejando resultados
    professor.length ? res.send(professor) : res.status(404).send("no encontrado")
    
  }
);

//-------------parámetro query-------------------------------------
//--creando funcion para manejar parámetro Query--
function ordenarId(req, res, obj){
  console.log(req.query.ordenar)
  if(req.query.ordenar === "ascendente"){
    return res.send(JSON.stringify(
      obj.sort( (current, next) => 
      current.id - next.id  
      )
    ));
  }else if(req.query.ordenar === "descendente"){
    return res.send(JSON.stringify(
      obj.sort( (current, next) => 
        next.id - current.id  
      )
    ));
  }else{
    return res.send(JSON.stringify(obj))
  }
}
pathProfessors.get("/",
  (req, res)=>{
    //llamando la función query
    ordenarId(req, res, datos.professors);
  }
);

//----------- manejando el metodo get--------------------------------





//---------------
// iniciando el puerto y el servidor
const PORT = process.env.PORT || 3000; //puerto asignado o 3000
app.listen(PORT, 
  ()=>{console.log("server on")}  
);




