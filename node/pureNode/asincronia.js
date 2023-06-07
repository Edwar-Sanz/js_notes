// promesas
// son procesos asíncronos que se generan durante 
// la ejecución del programa generan un objeto 

// la empieza en estado pending y en algún momento pasará
// al estado fulfilled o  el estado rejected


// creado una promesa 
const myPromise = new Promise((resolve, reject) => {
  // Aquí iría el código que realiza la tarea asíncrona
  
  if (""/* la tarea se realizó exitosamente */) {
    resolve('La tarea se realizó exitosamente.'); // Resuelve la promesa
  } else {
    reject('La tarea falló.'); // Rechaza la promesa
  }
});

// Ejecutamos la promesa
myPromise
  .then(resultado => console.log(resultado)) // Maneja la promesa resuelta
  .catch(error => console.error(error)); // Maneja la promesa rechazada


//--------------------ejemplo-----------------------------

//En el backend, podríamos tener una función 
//que realiza una tarea determinada, como calcular 
//el precio de un producto en función de su nombre y cantidad:

// ---------- En el backend -------------------
// En el backend
const http = require('http');
const url = require('url');

function calcularPrecio(producto, cantidad) {
  // Lógica para calcular el precio
  const precioUnitario = 10;
  const precioTotal = cantidad * precioUnitario;
  return {producto, cantidad, precioTotal};
}

const server = http.createServer((req, res) => { // creando servidor con el módulo http
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/calcular-precio') {
    const producto = parsedUrl.query.producto;
    const cantidad = parseInt(parsedUrl.query.cantidad);
    const resultado = calcularPrecio(producto, cantidad);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(resultado));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});



//-------------- En el frontend-------------
//Finalmente, en el frontend, podemos hacer una solicitud HTTP 
//a esta API para obtener el precio del producto:

fetch('/calcular-precio/zapatos/3')
  .then(response => response.json())
  .then(resultado => {
    console.log(`El precio total de ${resultado.cantidad} ${resultado.producto} es ${resultado.precioTotal}`);
  });



