// El módulo HTTP puede crear un servidor HTTP 
//que escuche los puertos del servidor y devuelva una respuesta al cliente.

// este módulo tiene diferentes metodos para
// manejar la solicitud del cliente (request)

// GET POST PUT DELETE

// get para solicitar un recurso

// post para crear un recurso, por ejemplo agregar un usuario nuevo a una base de datos

// put para modificar

// delete para eliminar 

// el servidor genera una respuesta (response)


const http = require('http');

const servidor = http.createServer(
  (req, res)=>{  
    
    // req hace referencia a las solicitudes 
    console.log(req.url); // se utiliza para obtener la URL de la página solicitada 
    console.log(req.method); //  se utiliza para obtener el método HTTP utilizado en la solicitud
    //console.log(req.headers);

    // res se refiere a las respuestas del servidor
    console.log(res.statusCode); // 200 ok
    res.setHeader("content-type", "application/json");
    console.log(res.getHeader())
    res.end("hola")
  }
);
const puerto = 3000;

servidor.listen(puerto,
  ()=>{
    console.log(`servidor activo en puerto ${puerto}`);
  }  
);


