
let arr = ["item0", "item1", "item2", "item3"];

arr.length //el tamaño del array

arr[0]; //retorna "item0"

arr[arr.length - 1]; //retorna el ultimo elemento


//elimina, agrega o reemplaza elementos, modifica el array inicial
const numes = [1, 2, 3, 4, 5];
// Eliminar dos elementos a partir del índice 2
const removed = numes.splice(2, 2); //[3, 4]
// numes = [1, 2] lo modifica
// Agregar elementos a partir del índice 2
numes.splice(2, 0, 'a', 'b'); // [1, 2, "a", "b", 5]
// Reemplazar elementos a partir del índice 2
numes.splice(2, 2, 'c', 'd'); // [1, 2, "c", "d", 5]



//------recorrer un array-----aplicar funciones------------------------------------

//ejecuta la función indicada una vez por cada elemento del array.
[1,2,3].forEach(element => console.log(element));

//map crea un array despues de aplicarle la funcion indicada
//map crea un array nuevo
arr.map((elem, index) => {
    console.log(elem, index);
});

// aplica una funcion al acumulado de iterar por un array
[1, 2, 3, 4].reduce( (acc, cur) => acc+cur); //retorna 10
//tambien existe reduceRight()



// ----------agregar----------------------------------------------------------------------

// push() añadir elemento al final
arr.push("item4");

// unshift() añade un elemento al principio
arr.unshift("item00");



// ----------eliminar----------------------------------------------------------------------

// pop() elimina el ultimo elemento 
arr.pop("item4");

//otra forma de eliminar elementos es cambiando length
arr.length = 2; // arr = ["item0", "item1"]

// shift() elimina el elemento del principio
arr.shift("item00");



// ----------buscar----------------------------------------------------------------------

//buscar un elemento
arr.indexOf("item3"); //retorna 3

// indice de un elemento, se busca desde un indice especificado
[1,2,3].indexOf(2,0) // busca desde index 0, retorna 1 o sea el 2 esta en el 1

// retorna el indice donde está el ultimo elemento que coincida con la busqueda
['a', 'b', 'c', 'a'].lastIndexOf('a'); // retorna 3

// find() devuelve el primer elemento que cumpla la condicion de la función de prueba proporcionada
[5, 12, 8, 130].find(i => i > 10); //retorna 12

//retorna el primer elemento que cumpla la condicion
//const nums1 = [1, 10, 20, 35, 40, 50];
[1,20,300].filter(i => i < 30); // 1;
// para obtener el indice se usa .findIndex()
[1,20,300].findIndex(i => i < 30); // 0;

// ----------crear----------------------------------------------------------------------

// crea un array a partir de datos
Array.of(1,2, "tres"); //[1, 2, "tres"];

//crear un array a partir de un iterable
Array.from("abc"); // ["a", "b", "c"]
//otro uso es para operar el array creando uno nuevo
Array.from([1, 2, 3], x => x + x); // [2, 4, 6]

//crea un nuevo array manteniendo los valores en los indices especificados
['a', 'b', 'c', 'a'].slice(1,3); // [b, c]

// retorna un array con los valores que cumplan una codicion
const nums1 = [1, 10, 20, 35, 40, 50];
nums1.filter(i => i < 30); // [1, 10, 20];

// ----------validar--condiciones--------------------------------------------------------------------

// true si es un array
Array.isArray([1,2,3]); // true

//comprueba si alguno cumple la condicion
[1, 2, 3, 4, 5].some((i) => i % 2 === 0); //true

//verifica si todos los elementos complen una condicion
const condicion = (i) => i < 40;
const nums = [1, 30, 39, 29, 10, 13];
nums.every(condicion); // true

//verdadero si contiene el elemento
[1,2,3].includes(2); //true



// ----------modificar-------------------------------------------------------------------------------------------

//ordena el array según la posicion unicode
[1, 10, 2, 21].sort() // [1, 10, 2, 21]

//modifica el array ordenandolo a la inversa
['one', 'two', 'three'].reverse(); //["three", "two", "one"]

//splice modifica un array extrayendo elementos
let extraidos = arr.splice(1, 2); //extraidos tiene ["item1", "item2"]
//arr queda con ["item0", "item3"]
//slice también sirve para copiar un array
let arrCopia = arr.splice();

// concatenar dos arrays
const array1 = ['a', 'b'];
const array2 = ['c', 'd'];
const array3 = array1.concat(array2); // ["a", "b", "c", "d"]

//sobrescribe un array con valores del mismo array 
//arr.copyWithin(target, start, end);
const myArray = [1, 2, 3, 4, 5];
myArray.copyWithin(2, 0, 3); // [1, 2, 1, 2, 3]

//cambia los valores del array por un valor
//se especifica el inicio y el final
const n = [1, 30, 39, 29];
array1.fill(0, 2, 4); // [1, 30, 0, 0]



// ----------objIterable-------------------------------------------------------------------------------------------

//crear objetoIterador
const array = ['a', 'b', 'c'];
const iterator1 = array1.entries(); //crea el objeto
iterator1.next().value // para acceder a los valores ne hace con .next().value
// tambien se puede acceder con un bucle for...of

//retorna un objeto iterador con los indices de un array
const itera = ['a', 'b', 'c'].keys();
//se puede acceder a el con un bucle for...of

//crea un iterador con los valores del array
const iter = ['a', 'b', 'c', 'a'].values
//se accede mediante .next().value
iter.next().value



//--------------retorna String---------------------------------------------------------------

// retorna una cadena uniendo el array con un separador especificado
['Fire', 'Air', 'Water'].join(""); // "FireAirWater"

//convierte un array a un string
[1,2,3].toString(); // "1,2,3"
















