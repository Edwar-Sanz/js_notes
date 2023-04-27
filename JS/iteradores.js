//for:	execute a block of code a number of times.	
 for (let i=0; i < 10; i++) {console.log(i); }

//------------------------------------------------------------------------
//for...in:	recorre cada clave del objeto iterable
for (const key in ["a", "b"]) {console.log(key);}//retorna 0 1


for (const key in {"a":1, "b":2}) {console.log(key);}//retorna a b


const obj = { "a": 1, "b": 2, "c": 3 };
for (let clave in obj) {
  console.log(`clave ${clave} con valor ${obj[clave]}`);
}
// clave a con valor 1
// clave b con valor 2
// clave c con valor 3

//------------------------------------------------------------------------
//for of:	recorre cada elemento de un iterable	

for (let elem of "abc") {console.log(elem);} // a b c

const arr = [1, 2, 3];
for (let elem of arr) {
    console.log(elem);
} // 1 2 3

//------------------------------------------------------------------------
             
//while	ejecuta el codigo mientras sea verdad
while (true) {
    console.log("hola");
}
//------------------------------------------------------------------------

//do while	igual que while pero ejecuta el codígo por lo menos una vez antes de entrar al loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

//------------------------------------------------------------------------
//for each:	recorre cada elemento DE UN ARRAY
[1,2,3].forEach((elem, index) => {console.log(elem, index);});
//retorna
//element index 
//  1       0
//  2       1
//  3       2

//otro ejemplo conviertiendo una cadena a array
const str = 'Hola mundo';
str.split('').forEach((char, index) => {
  console.log(`Caracter ${char} en el índice ${index}`);
});

//-----------------------------------------------------------------------

//map aplica una funcion a cada elemento DE UN ARRAY

const array = [1, 2, 3];

const nuevoArray = array.map(function(elemento) {
  return elemento * 2;
});

console.log(nuevoArray);

//la sintaxis de map es:
// array.map(function(valorActual, indice, array) {
//     // Código a ejecutar en cada iteración
//     return nuevoValor;
//   });
