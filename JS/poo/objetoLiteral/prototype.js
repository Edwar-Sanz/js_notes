// Definición de una función constructora "Persona"
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Agregar un método "saludar" al objeto "prototype" de Persona
Persona.prototype.saludar = function() {
  console.log("Hola, mi nombre es " + this.nombre);
};

// Crear instancias de Persona
const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("María", 25);

// Acceder a las propiedades
console.log(persona1.nombre); // Output: "Juan"
console.log(persona2.edad); // Output: 25

// Llamar al método compartido a través del objeto "prototype"
persona1.saludar(); // Output: "Hola, mi nombre es Juan"
persona2.saludar(); // Output: "Hola, mi nombre es María"
