
console.log(process)
console.log(process.env) //informacion sobre en el entorno

// retorna un array con los agumentos pasados en la linea de comandos
// ejemplo abrir este archivo y escribir otros argumentos:
// node .\modulos.js 1 2 3 4 5 6

console.log(process.argv)
for (let i = 2; i < process.argv; i++) { // a partir del indice 2 se puede acceder a los valores
  console.log(process.argv[i])
}



//-----------modulo os------------------

const os = require("os")

console.log(os.type()) // tipo del sistema operativo
console.log(os.homedir())   //ruta del home
console.log(os.uptime())    // tiempo que lleva el sistema funcionando
console.log(os.userInfo())  // informacion del usuario

//----------------------------------------

setTimeout(() => { }, timeout); //ejecuta una función con retrazo
setImmediate() // ejecuta lo antes posible el evento
setInterval() // ejecuta un código infitas veces con un retrazo

//-----------modulo fs----------
// agregando Sync los metodos se comportan de forma síncrona

const fs = require("fs")

// leer el archivo
fs.readFile("index.html", "utf-8", 
  (err, content)=>{
    if (err) {throw err}
    console.log(content);
  }
)

//renombrar archivo
fs.rename("index.html", "nombreNuevo.html",
  (err)=>{
    if (err) {throw err}
    console.log("Nombre cambiado exitosamente");
  }

)

// agregar algo al final de un archivo
fs.appendFile("index.html", "<p>nuevo elemento</p>",
  (err)=>{
    if (err) {throw err}
    console.log("archivo actualizado");
  }
)

// reemplazar todo el archivo
fs.writeFile("index.html", "nombreNuevo.html",
  (err)=>{
    if (err) {throw err}
    console.log("Nombre cambiado exitosamente");
  }
)

//eliminar archivos
fs.unlink("index.html",
  (err)=>{
    if (err) {throw err}
    console.log("Archivo eliminado exitosamente");
  }
)