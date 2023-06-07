const datos = { 
"professors" : [
  {
      "id": 1,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
  },
  {
      "id": 2,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
  },
  {
      "id": 3,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
  }
],
"students" : [
  {
      "id": 1,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
  },
  {
      "id": 2,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
  },
  {
      "id": 3,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
  }
]}

const http = require("http");

function handleGet(req, res){
  const path = req.url;
  // res.statusCode = 200; valor por defecto, en caso de querer enviar otro código se tiene que cambiar 
  if (path === "/") {   
    return res.end("todo ok");
  }else if(path === "/datos"){    
    return res.end(JSON.stringify(datos))
  }else if(path === "/datos/professors"){ 
    return res.end(JSON.stringify(datos.professors))
  }
  res.statusCode = 404;
  return res.end("No encontrado 404")
}

function handlePost (req, res){
  const path = req.url;
  if(path === "/datos/students"){
    let newStudent = "";
    req.on("data", content =>{
      newStudent += content.toString();
      }
    )
    req.on("end", () =>{
      newStudent = JSON.parse(newStudent);
      console.log(newStudent.first_name);
      res.end("solicitud POST")
      }
    )
  }
}

const server = http.createServer(
  (req, res)=>{
    const metodo = req.method;
    switch(metodo){
      case "GET":
        return handleGet(req, res);
      case "POST":
        return handlePost(req, res);
      default:
        res.statusCode = 501;
        res.end(`el metodo ${metodo} no pudo ser manejado`)
    }
  }
);
const puerto = 3000
server.listen(puerto, ()=>{ console.log("servidor activo en http://127.0.0.1:3000/") })


