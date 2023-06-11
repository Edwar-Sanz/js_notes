
//-------------In JavaScript all functions are object methods.-------------////

// llamar metodos en diferentes objetos: 
const persona1 = {
    nombre: "Maria",
    saludo (){                           // primer metodo
        return `Mi nombre es ${ this.nombre }` 
    },	
    edad(born_year) { 					        // segundo metodo
        let date = new Date();
        return date.getFullYear() - born_year; 
      } 
};
// creamos un objeto que solo tiene la propiedad nombre
// con los siguientes metodos podemos llamar las funciones que tenía persona1
const persona2 = { nombre: "Daniela" }; // este objeto no tiene ningún metodo

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
