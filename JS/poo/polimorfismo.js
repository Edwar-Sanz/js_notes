class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("El animal hace un sonido.");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("El perro ladra.");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("El gato maulla.");
  }
}

// Crear instancias de las clases
const animal = new Animal("Animal");
const dog = new Dog("Toby");
const cat = new Cat("Mittens");

// Llamar al método makeSound en cada instancia
animal.makeSound(); // El animal hace un sonido.
dog.makeSound(); // El perro ladra.
cat.makeSound(); // El gato maulla.
