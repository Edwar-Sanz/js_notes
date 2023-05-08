const miUrl = new URL("https://www.ejemplo.com/videos/programacion?ordenar=python&nivel=1")
// lo que está a partir del interrogante son parámetros query ?ordenar=python&nivel=1

console.log(miUrl.hostname); // www.ejemplo.com

console.log(miUrl.pathname); // videos/programacion

console.log(miUrl.searchParams); //retorna un objeto searchParams { 'ordenar' => 'python', 'nivel' => '1' }
console.log(miUrl.searchParams.get("ordenar")) // retorna el valor de la key o sea python       





