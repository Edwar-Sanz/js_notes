//--------numeros----------------------------


// Number.NaN equivale a NaN
let nonNumber = NaN;

//isNaN() verifica si es Nan
Number.isNan(nonNumber); //retorna true

//isFinite() verifica si es finito
Number.isFinite( 1/0 ); //retorna falso

//isInteger() verifica si es entero
Number.isInteger(1); //retorna true

//Number.parseFloat es igual a  parseFloat
//analisa un string y retorna el numero si no se puede retorna Nan
Number.parseFloat('1.1a'); //retorna 1.1
Number.parseFloat('a1.1a'); //retorna NaN

//Number.parseInt es igual a  parseInt
//analisa un string y retorna el numero si no se puede retorna Nan
//es necesario especificar la base
Number.parseFloat('1', 10); //retorna 1
Number.parseFloat('a1a', 10); //retorna NaN

//toFixed() retorna una cadena redondeando un numero
3.1415.toFixed(2); //retorna "3.1"

//Number() transforma en un numero
Number('123');   // retorna 123

//Math.PI
let pi = Math.PI; //retorna 3.14159....

//hay otros valores con Math como por ejemplo Constante de Euler
// y los logaritmos de 2 o 10 que se usan a veces como constantes
console.log(Math.E, Math.LN2, Math.LN10, Math.LOG10E);

//las funciones trigonométricas: 
//(sin(), cos(), tan(), asin(), acos(), atan(), atan2()) 
//devuelven ángulos en radianes. Para convertir radianes 
//a grados, divida por (Math.PI / 180), y multiplique por 
//esto para convertir a la inversa.


let x = -10;
//Devuelve el valor absoluto de un número.
Math.abs(x); // 5

//Devuelve el entero más pequeño mayor o igual que un número.
Math.ceil(x);

//Devuelve el mayor entero menor que o igual a un número.
Math.floor(x);

//Devuelve el logaritmo natural (log, también ln); de un número.
Math.log(x);

//Devuelve el logaritmo en base 10 de x.
Math.log10(x);

//Devuelve el logaritmo en base 2 de x.
Math.log2(x);

//Devuelve el resultado de una multiplicación de enteros de 32 bits.
Math.imul(x, y);

//Devuelve el mayor de cero o más números.
Math.max();

//Devuelve el más pequeño de cero o más números.
Math.min();

//Las devoluciones de base a la potencia de exponente, que es, baseexponent.
Math.pow(x, y);

//Devuelve un número pseudo-aleatorio entre 0 y 1.
Math.random();

//Devuelve el valor de un número redondeado al número entero más cercano.
Math.round(x);

//Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
Math.sign(x);

//Devuelve la raíz cuadrada positiva de un número.
Math.sqrt(x);

//Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.
Math.trunc(x);


//-------------------trigo-------------------------------
// calcula la hipotenusa
Math.hypot(); 

//Devuelve el arco coseno hiperbólico de un número.
Math.acosh(x);

// Devuelve el arco coseno de un número.
Math.acos(x);

//Devuelve el arco seno de un número.
Math.asin(x);

//Devuelve el arco seno hiperbólico de un número.
Math.asinh(x);

//Devuelve el arco tangente de un número.
Math.atan(x);

//Devuelve el arco tangente hiperbólico de un número.
Math.atanh(x);

//Devuelve el arco tangente del cuociente de sus argumentos.
Math.atan2(y, x);

//Devuelve el coseno de un número.
Math.cos(x);

//Devuelve el coseno hiperbólico de un número.
Math.cosh(x); 

//Devuelve el seno de un número.
Math.sin(x);

//Devuelve el seno hiperbólico de un número.
Math.sinh(x);

//Devuelve la tangente de un número.
Math.tan(x);

//Devuelve la tangente hiperbólica de un número.
Math.tanh(x);

//---------------------------------------------------------
//Devuelve la raíz cúbica de un número.
Math.cbrt(x);

//Devuelve el número de ceros iniciales de un entero de 32 bits.
Math.clz32(x);

//Devuelve Ex, donde x es el argumento, y E es la constante de Euler (2.718...);, la base de los logaritmos naturales.
Math.exp(x);

//Devuelve ex - 1.
Math.expm1(x);

//Devuelve la representación flotante de precisión simple más cercana de un número.
Math.fround(x);

//Devuelve el logaritmo natural de x + 1 (loge, también ln); de un número.
Math.log1p(x);
