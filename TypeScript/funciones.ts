// void para funciones que no retornan nada
function printHello(): void {
  console.log('Hello!');
}

//-----------------------
// funcion que retorna un string
function hello(): string {
  return "hello";
}
console.log(hello());

//--------------------------
// función con parámetro opcional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

//-------------------------
// función con parámetro por defecto
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}