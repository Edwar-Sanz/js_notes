

JSON.parse() //convierte json a objeto
JSON.stringify() //convierte objeto en string

// Keys must be strings, and values must be a valid JSON data type:

// string
// number
// object
// array
// boolean
// null

//JSON:
//'{"name":"John", "age":30, "car":null}'

//objeto:
//{"name":"John", "age":30, "car":null}


//---------------------------jquery----------------------------------

// seleccionar por id
myElement = $("#idElement");

// seleccionar por class-name
myElements = $(".classNameElement");

// todos los <p>
myElements = $("p");

// inner text en elemento
elemento.text ("texto"); // elemento.textContent  = "texto"

// obtener texto del elemento
myText = elemento.text() // con js myText = elemento.textContent;

// agregar elemento en elemento
myElement.html("<p>Hello World</p>"); // con js myElement.innerHTML = "<p>Hello World</p>";

// get content 
content = myElement.html(); // con js content = myElement.innerHTML;

// eliminar elemento
elemento.remove();  // con js elemento.remove();

// get parent
myParent = elemento.parent().prop("nodeName");  // myParent = elemento.parentNode.nodeName;