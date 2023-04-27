//¿Que devolvería la función si la invoco como calculo (undefined)?
function calculo(x) { return (!x); }
calculo(undefined); // true

//------------------------------------------------
//¿Cómo cargaríamos una librería Javascript dentro de una página web?


//------------------------------------------------
// ¿Que devolverá la función document.getElementById("capa").innerHTML?
//   <div id="capa"></div>
document.getElementById("capa").innerHTML // ""

//------------------------------------------------
//¿Qué devolvería la sentencia typeof libro?
var libro = {
    titulo:'Las Legiones Malditas',  
    autor:'Santiago Posterguillo',
    informacion:function (){ return this.titulo + " escrito por " + this.autor; }
}
typeof(libro.informacion()); // string
typeof(libro.informacion); //funtion
//------------------------------------------------












