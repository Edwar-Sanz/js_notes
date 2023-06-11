/*
los atributos definen las características distintivas
 y la información que puede almacenar un objeto.
los atributos describen al objeto
en JS sería equivalente a pares de clave-valor

*/

// Definición de una clase base llamada "Persona"
class Persona {
  // Constructor de la clase Animal, se ejecuta cuando se crea una nueva instancia de Persona con "new"
  constructor(nombre, edad) {
    this.nombre = nombre;     // atributo nombre
    this.edad = edad;         // atributo edad
  }
}

// Creación de una nueva instancia de la clase Persona
const persona1 = new Persona("Juan", 25);

console.log(persona1.nombre); // Output: "Juan"
console.log(persona1.edad); // Output: 25
