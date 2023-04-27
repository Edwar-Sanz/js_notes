const myobject = new Object();

// agregar clave valor
myobject.a = 1; // { a: 1 }

//crea un objeto a partir de otro o varios 
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = Object.assign(target, source); //{ a: 1, b: 2, c: 3, d: 4  }


// llave valor
const object1 = {a: 'somestring', b: 42, c: false};
Object.keys(object1) // Array ["a", "b", "c"]
Object.values(object1) // [ 'somestring', 42, false ]


//crea un array con las key value
const arr = Object.entries(obj3); //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]

// lo contrario a entries
Object.fromEntries(arr); //{ a: 1, b: 2, c: 3, d: 4 }

// conjela un array para que no se pueda modificar
Object.freeze(myobject) 

//crea un array con los nombres de la propiedades del array
var obj = { 0: "a", 1: "b", 2: "c"};
Object.getOwnPropertyNames(obj)
//[ '0', '1', '2' ]

// verificar si son el mismo objeto 
var test = { a: 1 };
Object.is(test, test);       // true
Object.is("hola", "hola");  // true

// otros metodos con is:
//Determina si está permitido extender un objeto.
Object.isExtensible()
//Determina si un objeto está congelado.
Object.isFrozen()
//Determines si un objeto está sellado.
Object.isSealed()




