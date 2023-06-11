const person = {
  name: "", //atributo
  sayName() { //método
    console.log(`My name is ${this.name}.`);
  }
};

const john = Object.create(person); //instancia
john.name = "John";                 //acceder al atributo
john.sayName();                     //acceder a la propiedad


//--------------------------------------------------------------------------------------
function empleado(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
  this.sayJobtitle = function sayName() { 
    console.log(`My name is ${this.name}.`);
  }  
  }

//instancia de la clase
const fred = new empleado("Fred Flintstone", "Caveman", 1970);

