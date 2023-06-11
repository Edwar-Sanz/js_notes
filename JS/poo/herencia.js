// Definición de la superclase "Figura"
class Figura {
  constructor(color) {
    this.color = color;
  }
  // Método de la superclase
  mostrarColor() {
    console.log("El color de la figura es " + this.color);
  }
}

// Definición de la subclase "Rectangulo" que hereda de "Figura"
class Rectangulo extends Figura {
  constructor(color, ancho, alto) {
    super(color); // Llamada al constructor de la superclase usando "super"
    this.ancho = ancho;
    this.alto = alto;
  }
  // Método específico de la subclase
  calcularArea() {
    return this.ancho * this.alto;
  }
}

// Creación de una instancia de la subclase
const miRectangulo = new Rectangulo("rojo", 5, 3);

// Acceso a propiedades y métodos heredados de la superclase
console.log(miRectangulo.color); // Output: "rojo"
miRectangulo.mostrarColor(); // Output: "El color de la figura es rojo"

// Acceso a propiedades y métodos específicos de la subclase
console.log(miRectangulo.ancho); // Output: 5
console.log(miRectangulo.alto); // Output: 3
console.log(miRectangulo.calcularArea()); // Output: 15
