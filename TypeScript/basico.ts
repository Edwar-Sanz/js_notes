
/*
ejecutar npx tsc --init para crear archivo de configuración
*/

//----------------------asignación-----------------------------|
let name1: string = "Pepe"; // Explicit - writing out the type
let name2 = "Pepe"; //Implicit - based on the assigned value    

//-------------------tipos de variables------------------------|
let var1: boolean = true; // variable de tipo booleano
let var2: string = "Juan"; // variable de tipo string
let var3: number = 30;       // variable de tipo number
const var4: number = 3.1416;   // constante de tipo number
let y: undefined = undefined;
let z: null = null;

//---------------------------------------------------
// variable que puede contener un número o una cadena
let resultado: number | string = 42; 
resultado = "cuarenta y dos";

//-------------------------any---------------------------------|
//any es un tipo que deshabilita la verificación de tipos 
let dato: any = 42;
dato = "Hola, mundo";

//-----------------------unknown-------------------------------|
// unknown requiere una verificación de tipos y manejar lo casos
function typeVar(valor: unknown) {
  if (typeof valor === "string") {
    console.log("Es una cadena: " + valor.toUpperCase());
  } else if (typeof valor === "number") {
    console.log("Es un número: " + valor.toFixed(2));
  } else {
    console.log("Tipo desconocido");
  }
}

let data: unknown = "Hola, mundo";
typeVar(dato);

//-----------------------never---------------------------------|
/* señala claramente situaciones donde algo inesperado está 
ocurriendo, como excepciones no controladas o bucles infinitos. */
function aError(mensaje: string): never {
  throw new Error(mensaje);
}










