// interacciones basicas con los elementos y el documento

//esto se puede poner en una funcion para ejecutarlo con un boton
document.getElementById("idDelElementoAcambiar").innerHTML = "Nuevo texto en el elemento";


//esto borra toda la pantalla y pone lo que aparece en la funcion
document.write("<br> <br>"+ "esto es un document.write");


//esto crea una alerta en el navegador
window.alert("Esto es un window.alert");


// un prompt es como una alerta donde se puede escribir
//prompt recibe dos valores, texto de la alerta y texto default
//prompt retorna lo que se escriba en el cuadro de texto
function function_on_prompt() {
    //define las variables
    let text;
    let person = prompt("Hola!!!", "escribe tu nombre");

    //se hacen validaciones para que no sea una cadena vacía
    if (person == null || person == "") {
      text = "Escribe algo";
    } 
    else{
      text = "Hello " + person + "! How are you today?";
    }
    //si no es vacía se hace una alerta saludando
    window.alert(text);
}


//console.log es como un print
console.log("Hola consola");