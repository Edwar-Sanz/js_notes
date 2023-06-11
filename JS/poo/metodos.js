/*
  los métodos representan el comportamiento 
  o las acciones que un objeto puede realizar.
  en este Js serían funciones dentro del objeto

  los métodos también pueden recibir parámetros

*/


class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  // metodo1
  saludar() {   
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
  // metodo2 
  presentarse(alguien) {   
    console.log(`Hola ${alguien}, mi nombre es ${this.nombre}.`);
  }
}

// Creación de una nueva instancia de la clase Persona
const persona1 = new Persona("Juan", 25);

// llamada del método
persona1.saludar();            // Output: "Hola, mi nombre es Juan y tengo 25 años."
persona1.presentarse("Maria"); // Output: "Hola Maria, mi nombre es Juan."



