//------------poo-----------------
//------------clases-------------------------

//La clase persona recibe dos parametros

class Persona {
    constructor(nombre, born_year) {
        this.nombre = nombre;
        this.born_year = born_year; 
    } 
    //el método edad resta el año actual con parámetro ingresado
    edad() {
        let date = new Date();
        return date.getFullYear() - this.born_year;
    }
} 
//se crea la variable persona_jhon y con .edad() se accede al metodo
let persona_jhon = new Persona("Jhon", 2000);	  
persona_jhon.edad() 



//-------------object-metodo------------------------
const person = {
    name: "",
    sayName() {
      console.log(`My name is ${this.name}.`);
    }
  };
  
  const john = Object.create(person);
  john.name = "John";
  john.sayName(); // "My name is John."

//-----------------this----prototype-----------------------
function empleado(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
  }
  empleado.prototype.salary = 2000; //prototype agregar una nueva propiedad
  
  const fred = new employee("Fred Flintstone", "Caveman", 1970);


//------------------------------------------////

// llamar metodos en diferentes objetos: 
const persona1 = {
    nombre: "Maria",
    saludo (){                                  // primer metodo
        return `Mi nombre es ${ this.nombre }` 
    },	
    edad(born_year) { 					        // segundo metodo
        let date = new Date();
        return date.getFullYear() - born_year; 
      } 
};
// creamos un objeto que solo tiene la propiedad nombre
// con los siguientes metodos podemos llamar las funciones que tenía persona1
const persona2 = { nombre: "Daniela" };

//diferencias entre call apply bind

persona1.edad.call(persona2, 1994);		//los argumentos en call se pasan separados por comas
persona1.edad.apply(persona2, [1994]);		// en apply los argumentos se pasan en un array

const edad = persona1.edad.bind(persona2);	// en bind se tiene que guardar el metodo en una variable 
edad(1994);					//y despues llamarlo

  
  //-----------------------------------
  //Object.defineProperty crea una propiedad configurando las caracteristicas
  const persona = {};
  
  Object.defineProperty(persona, "name", {
    value: "John",
    writable: false,
    enumerable: false,
    configurable: false
  });
  
  //------------------------------------
  Object.defineProperties(persona, {
    "property1": {
      value: true,
      writable: true
    },
    "property2": {
      value: "Hello",
      writable: false
    }
    // etc. etc.
  });
