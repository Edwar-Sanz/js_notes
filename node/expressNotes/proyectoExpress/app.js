// importando express
const express = require("express");
const app = express(); // creando la app

// notas: res.json ganantiza que la respuesta sea json
// res.end permite enviar una respuesta vacía


//importando los datos del ejemplo
const {datos} = require("./datos.js");


//-----routers-----
const pathProfessors = express.Router();
app.use("/api/datos/professors", pathProfessors);

//------routing----------------------------------------------------------

//----------- manejando el metodo get-------read-------------------------
app.get("/",(req, res)=>{res.send("Api Home")});

// enviando los datos
app.get("/api/datos",(req, res)=>{res.send(datos)});

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
    return res.send(
      obj.sort( (current, next) => 
      current.id - next.id  
      )
    );
  }else if(req.query.ordenar === "descendente"){
    return res.send(
      obj.sort( (current, next) => 
        next.id - current.id  
      )
    );
  }else{
    return res.send(obj)
  }
}
pathProfessors.get("/",
  (req, res)=>{
    //llamando la función query
    ordenarId(req, res, datos.professors);
  }
);

//----------- manejando post----------create----------------------
pathProfessors.use(express.json());
pathProfessors.post("/", (req, res)=>{
  let newTeacher = req.body
  datos.professors.push(newTeacher);
  res.send(datos.professors)
});
//----------- manejando put-------update-------------------------
//put para actualizar todos los parámetros
pathProfessors.put("/:id", (req, res)=>{ //tomando parametro id
  const updateTeacher = req.body; // obtenemos el item actualizado del cuerpo de la solicitud
  const id = req.params.id;   // guardamos el valor del parametro de la URL
  const indice = datos.professors.findIndex(item => item.id === Number(id)) // buscamos el indice que sea igual al del parámetro
  if(indice >= 0) {datos.professors[indice] = updateTeacher} // actualizamos todo el objeto
  res.send(datos.professors); //retornamos el nuevo objeto actualizado
});

//----------- manejando PATCH----update-------------------------
// patch solo actualizar algunos parámetros
pathProfessors.patch("/:id", (req, res)=>{ //tomando parametro id
  const updateInfo = req.body; // obtenemos el item actualizado del cuerpo de la solicitud
  const id = req.params.id;   // guardamos el valor del parametro de la URL
  const indice = datos.professors.findIndex(item => item.id === Number(id)) // buscamos el indice que sea igual al del parámetro
  
  if(indice >= 0) { // actualizamos los valores dados
    const elementToUpdate = datos.professors[indice];
    Object.assign(elementToUpdate, updateInfo) 
  } 
  res.send(datos.professors); //retornamos el nuevo objeto actualizado
});

//----------- manejando delete----DELETE-------------------------
pathProfessors.delete("/:id", (req, res)=>{ //tomando parametro id
  const id = req.params.id;   // guardamos el valor del parametro de la URL
  const indice = datos.professors.findIndex(item => item.id === Number(id)) // buscamos el indice que sea igual al del parámetro
  
  if(indice >= 0) { // eliminamos el indice
    datos.professors.splice(indice, 1);
  }
  res.send(datos.professors); //retornamos el nuevo objeto actualizado
});


//---------------
// iniciando el puerto y el servidor
const PORT = process.env.PORT || 3000; //puerto asignado o 3000
app.listen(PORT, 
  ()=>{console.log("server on")}  
);




