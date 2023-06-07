// en consola:
// node
// .help
// .break    Sometimes you get stuck, this gets you out
// .clear    Alias for .break
// .editor   Enter editor mode
// .exit     Exit the REPL
// .help     Print this help message
// .load     Load JS from a file into the REPL session
// .save     Save all evaluated commands in this REPL session to a file


function mysaludo(){console.log("hi")}

module.exports.mysaludo = mysaludo// para exportar, retorna un {mysaludo:[funtion: mysaludo]}
module.exports ={mysaludo:mysaludo} // otra forma de exportar
const saludo = require("./nombreArchivo.js") // asigna el objeto a una variable
saludo.mysaludo //acceder a la propiedad del objeto


module.mysaludo = function (){console.log("hi")} //otra forma de exportar
const saludo = require("./nombreArchivo.js")


const {mysaludo} = require("./nombreArchivo.js") //otra forma de importar

// algunos módulos built in
//http
//http
//fs (file system)
//os (operatyng system)
// path

