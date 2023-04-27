let i = 0 ;
while(i < 10){
    try {
        const valor = obtenerValor();
        if (valor < 0) { throw new Error("El valor no puede ser negativo");}
        console.log("valor ok:", valor);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Esto se ejecuta siempre");
        i++;
    }
    console.log("\n ******************************************");
}
function obtenerValor() {
const valor = Math.random() - 0.5;
console.log("El valor generado es", valor);
return valor;
}
    
    

/*
En este ejemplo, se utiliza try para envolver el código que se desea ejecutar. 
Dentro de try, se llama a una función obtenerValor() 
que devuelve un número aleatorio entre -0.5 y 0.5.

Si el valor obtenido es negativo, se lanza una excepción usando throw. 
El mensaje de la excepción es "El valor no puede ser negativo".

Si se produce una excepción dentro de try, 
el control se pasa a la sección catch, 
que recibe como parámetro el objeto Error que se ha lanzado. 
En este caso, se imprime el mensaje de la excepción usando console.error().

Después de la sección catch, se ejecuta la sección finally, 
que se ejecuta siempre, independientemente de si se ha producido una excepción o no.

En este ejemplo, la función obtenerValor() 
se utiliza para demostrar el funcionamiento de throw, 
pero en un caso real, esta función podría ser una llamada a una API 
o una operación que pudiera lanzar excepciones.


*/