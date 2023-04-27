// strings
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator
// \'	'	
// \"	"	
// \\	\


//----------retorna cadena--------------
// charAt() devuelve el caracter el indice especificado
"Hola".charAt(0); // retorna "H"

// concat() une o concatena dos o mas cadenas
"hola".concat(" ", "mundo"); // retorna "hola mundo"

//replace() reemplaza una cadena con otra
"hola ".replace("a", "4"); // retorna "hol4"

//elimina los espacios, tambien existe .trimStart .trimEnd
"     hola     ".trim() // retorna "hola"

//valueOf() retorna el valor de un elemento html o una variable
// <p id="idDelp"> hola </p>     esto es codigo html
let elemnto = getElementById("idDelp");
let valorDelElemnto = elemnto.valueOf() // retorna "hola"

//minusculas
"HoLa".toLowerCase(); //retorna "hola"

//mayusculas
"HoLa".toUpperCase(); //retorna "HOLA"

// repeat() repite una cadena x veces 
"hola".repeat(3); // retrona "hola hola hola "

//padEnd() rellena la cadena con otra hasta que alcance la longitud dada
//tambien existe padStart()
"hola".padEnd(7, "."); //retorna "hola..."

// slice() extrae una parte de una cadena y devuelve la parte extraída
// toma el indice inicial y el indice final, SI admite indices negativos
"holaaaa".slice(0,4); // retorna "hola"

// slice() extrae una parte de una cadena y devuelve la parte extraída
// toma el indice inicial y el indice final, NO admite indices negativos
"holaaaa".substring(0,4); // retorna "hola"

// substr() extrae una parte de una cadena y devuelve la parte extraída
// toma el indice inicial y la longitud que va a extraer
"holaaaa".substr(0,4); // retorna "hola"

 
//-------------retorna entero----------------

//indexOf retorna el indice de la primera coincidencia de la subcadena especificada
"holaaa".indexOf("a"); // retorna 3, la primera coincidencia de "a"

// lastIndexOf retorna el indice de la ultima coincidencia de la subcadena especificada
"holaaa".lastIndexOf("a"); // retorna 5, la ultima coincidencia de "a"

//length retorna la longitud de la cadena
"holaaa".length //retorna 6

// .search  retorna el indice de la primera coincidencia de la cadena
"holaaa".indexOf("a"); // retorna 3, la primera coincidencia de "a"


//-------------comparaciones-----------------

//localeCompare()
"cadena1".localeCompare("cadena2"); // -1 porque cadena1 es menor que cadena2
"cadena1".localeCompare("cadena1"); // 0 porque porque son iguales
"cadena2".localeCompare("cadena1"); // 1 porque cadena2 es mayor que cadena1


//------------retorna boleano----------------

//startsWith true si la cadena empieza con otra cadena especificada
"hola".startsWith("h"); // retorna true

// endsWith true si la cadena termina con otra cadena especificada
"hola".endsWith("la"); // retorna true

// true si la caneda contiene la otra cadena 
"hola".includes("o"); // retorna true


//---------------chartCode-------------------

// fromCharCode convierte numeritos en letras 
String.fromCharCode(104, 101, 108, 111); // retorna hola

//charCodeAt() devuelve el codigo del caracter el indice especificado
"Hola".charAt(0); // retorna 72 que es el codigo de "H"


//------------retorna un array---------------

// split divide una cadena usando como separador otra cadena
"hola mundo".split(" "); //retorna ['hola', 'mundo']

// .match() utiliza una expresion regular y retorna un array con las coincidencias 
let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match(/in/g); //retorna  ['a', 'a', 'a', 'a']


