//----------------------interface------------------------------|
interface Persona {
  nombre: string;
  edad: number;
}

let persona: Persona = {
  nombre: "Maria",
  edad: 25
};

//------------------------------------------------
interface Rectangle {
  height: number,
  width: number
}
interface ColoredRectangle extends Rectangle {
  color: string
}
const rectangle: Rectangle = {
  height: 20,
  width: 10
};