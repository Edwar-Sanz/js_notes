// existen eventos sincronos y asíncronos
// y son todas las acciones que se realizan sobre la aplicación
// ejemplo el servidor está escuchando constantemente las posibles acciones
// o eventos, cuando eso pasa el servidor reacciona desencadenando un proceso

// emitter es un objeto que emite eventos, los emisores son
// instancias de la clase EventEmitter y se asocian a un metodo on()
// para ejecutar un función "eventHandler" para manejar el evento

// modulo de eventos
// este módulo retorna una clase "EventEmitter"
const EventEmitter = require("events");

// instanciamos la clase
const usuario = new EventEmitter();

// usando el metodo .on y el manejador del evento
usuario.on("registro", ()=>{     // el evento registro se majena con una función flecha
  console.log("Registro Exitoso");
});


// emitiendo el evento con el metodo emit
usuario.emit("registro");


// evento con argumento en la función
usuario.on("compra", (n)=>{ 
  console.log(`Se realizó compra de ${n} productos`);
});

// emitiendo evento con argumento
usuario.emit("compra", 5);










