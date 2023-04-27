const myset = new Set([5, 6, 7, 8]);
// {5, 6, 7, 8}

myset.size; // 3

//añade elemento
myset.add(9); // {5, 6, 7, 8, 9}
myset.has(9); // true si lo tiene
myset.delete(9); // true si lo elimina exitosamente

//Elimina todos los elementos del objeto Set.
Set.prototype.clear()


//Devuelve un nuevo objeto iterador que genera los values 
//de cada elemento del objeto Set en el orden de inserción.
const iterator = myset.values(); 
iterator.next().value;

//Devuelve un nuevo objeto iterador que contiene 
//un arreglo de [value, value] para cada elemento del objeto Set, en orden de inserción.
const itera = miSet.entries(); //{ [ 5, 5 ], [ 6, 6 ], [ 7, 7 ], [ 8, 8 ] }
itera.next().value 


//Devuelve un nuevo objeto iterador que genera los values 
//de cada elemento del objeto Set en el orden de inserción.
//Set.prototype[@@iterator]() ejemplo:
const miSet = new Set(['a', 'b', 'c', 'd']);
const iterador = miSet[Symbol.iterator]();
let elemento = iterador.next().value;


//Un alias para Set.prototype.values().
Set.prototype.keys()



//El método forEach() ejecuta una función proporcionada una vez 
//para cada valor en el objeto Set, en orden de inserción.
myset.forEach((value) => { console.log(value)} );
