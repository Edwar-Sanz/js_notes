
//operador ternario
(1 > 0 ? "si" : "no"); // "si"

//arrow functions
let myFunction = (a, b) => a * b;

//spread operator
let miArray = [1, 2, 3];
let copiaArray = [...miArray];

//esta funcion suma un número indeterminado de datos
//gracias al spread operator
function sum_args(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}



/*
Operadores Aritméticos: 
+ (suma), 
- (resta), 
* (multiplicación),
** 
/ (división), 
% (módulo).

Operadores de Asignación: 
= (asignación), 
+= (suma y asignación), 
-= (resta y asignación), 
*= (multiplicación y asignación), 
/= (división y asignación), 
%= (módulo y asignación). 

Operadores de Comparación: 
== (igualdad), != (diferente), 
=== (estrictamente igual), 
!== (estrictamente diferente), 
< (menor que), > (mayor que), 
<= (menor o igual que), 
>= (mayor o igual que).

Operadores Lógicos: 
&& (AND), 
|| (OR), 
! (NOT).

*/