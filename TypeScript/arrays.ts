
//-------------------------------------------------------------------------|

let colors: string[] = ["rojo", "verde", "azul"]; // arreglo de strings
let ages: [number, number] = [10, 20];     // tupla de dos números

//-------------------------------------------------------------------------|
// solo se pueden agregar datos de tipo string
const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3);  // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

//------------------------------readonly-----------------------------------|
/*una vez que un arreglo con readonly se ha creado y se han asignado sus 
elementos, no se puede agregar, eliminar ni modificar los elementos de ese arreglo */
let numbers: readonly number[] = [0, 1, 2, 3, 4, 5];
let index0 = numbers[0]; // se puede acceder los elementos normalmente

//---------------------------tupla-----------------------------------------|
//Una tupla es una matriz escrita con una longitud y tipos predefinidos para cada índice.
const tuple1: readonly [number, boolean, string] = [5, true, 'Coding'];

//Las tuplas con nombre proporcionan más contexto sobre lo que representa el valor de un índice.
const graph: [x: number, y: number] = [55.2, 41.3];