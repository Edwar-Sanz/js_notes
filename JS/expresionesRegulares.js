// En JavaScript, las expresiones regulares se usan a menudo
// con los dos métodos search() y replace().

// .match() utiliza una expresion regular y retorna un array con las coincidencias

// regex.test("string")


//resumen

// caracter | descripción
//    .     | Coincide con cualquier carácter
//   \d     | Busca cualquier dígito [0-9]
//   \D     | Busca cualquier caracter que no sea un dígito equivale a: [^0-9]
//   \w     | Busca cualquier caracter alfanumérico equivale a: [A-Za-z0-9_]
//   \W     | Busca cualquier caracter que no sea un caracter del alfabeto latino básico [^A-Za-z0-9_]
//   \s     | Busca un solo caracter de espacio en blanco
//   \S     | Busca un solo caracter que NO sea un espacio en blanco
//   / /i   | búsqueda sin distinción entre mayúsculas y minúsculas
//   / /g   | busca de forma global
//   / /m   | búsqueda Multilinea, utiliza ^ y $
//    ^     | Coincide con el comienzo de la entrada despues del salto de linea
//    $     | Coincide con el final de la entrada despues del salto de linea
//   \b     | Marca el límite de una palabra. 
//   \B     | Coincide con un límite sin palabra.
//  x(?=y)  | Coincide con "x" solo si "x" va seguida de "y"
//  x(?!y)  | Coincide con "x" solo si "x" no va seguida de "y"
//  (?<=y)x | Coincide con "x" solo si "x" va precedida  de "y"
//  (?<!y)x | Coincide con "x" solo si "x" no va precedida  de "y"
//   x|y    | Coincide con "x" o "y"
//  [xyz]   | Coincide con cualquiera de los caracteres incluidos
//  [^xyz]  | Coincide con cualquiera de los caracteres no incluidos
//   (x)    | Grupo de captura
//    x*    | cero o mas
//    x+    | uno o mas
//    x?    | cero o uno
//   x{n}   | "n" apariciones del elemento "x"
//   x{n,}  | al menos "n" apariciones del elemento "x"
//  x{n,m}  | al menos "n" y como máximo "m"
//    
//-------------------------------------------------------------------------------------
const textoPrueba = '1 CANTAR canto cantas canta cantamos cantáis cantan cante 8\n\
2 Cantaré cantarás cantará cantaremos cantaréis cantarán 7\n\
3 Cantabas cantaba cantábamos cantabais cantaban cantado 6\n\
4 Cantando cantaría cantarías cantaríamos cantaríais 5\n\
5 Cantarían canté cantaste cantó cantamos cantasteis cantaron 4\n\
6 Cantemos cantes cantéis cantare cantares  cantáremos 3\n\
7 Cantareis cantaren cantara cantaras cantáramos cantarais 2\n\
8 Cantaran cantase cantases cantásemos cantaseis cantasen 1'


//  búsqueda sin distinción entre mayúsculas y minúsculas solo primera coincidencia 
let resultI = textoPrueba.match(/can/i); //
console.log(resultI[0]); // CAN

// distingue mayúsculas y minúsculas busca de forma global
let resultG = textoPrueba.match(/canta/g); // retorna un array con todas las coincidencias
console.log(resultG.length); //31

// se pueden combinar "gi"  
let resultGi = textoPrueba.match(/canta/gi); 
console.log(resultGi.length); //38

// buscar digitos 
// buscar digitos entre [1-9]
let resultDigitos = textoPrueba.match(/\d/g); // retorna un array con todas las coincidencias
console.log(resultDigitos.length); // 16

// buscar despues de un salto de linea
// la primera coincidencia de un digito + un espacio + "C"
// para buscar justo despues de un salto de linea se agrega "^" /^ /m
let resultSalto = textoPrueba.match(/^\d \C/mg); 
console.log(resultSalto.length); // 8
// para buscar justo antes de un salto de linea se agrega "$" / $/m
//busca las lineas que terminan en 3
let resultSalto2 = textoPrueba.match(/3$/mg); 
console.log(resultSalto2.length); // 1

// buscar caracteres [abc]
// todas las "B" y todas las "d"
let resultBrackets = textoPrueba.match(/[bd]/g); 
console.log(resultBrackets);

//buscar alternativas
let resultAlternativas = textoPrueba.search(/(aban|ando)/g); 
console.log(resultAlternativas); // search retorna el indice de la primera coincidencia

// espacios en blanco
let whitespace = textoPrueba.match(/\s/g); 
console.log(whitespace.length); //66

// indicar limites de la palabra
let empieza = textoPrueba.search(/\bcanto/); 
let termina = textoPrueba.search(/semos\b/); 
console.log(empieza +" "+ termina)


let text = "a aa aaa"; 
// uno o mas
let result = text.match(/a+/g); // retorna a aa aaa
// cero o mas
let result2 = text.match(/a*/g); // retorna [ 'a', '', 'aa', '', 'aaa', '' ]
// cero o uno
let result3 = text.match(/a?/g); // retorna ['a', '', 'a', 'a', '', 'a', 'a', 'a', '']
console.log(result); console.log(result2); console.log(result3);








