const person: { student: boolean, name: string, year: number } = {
  student: false,
  name: "Pepe",
  year: 2009
};


//-----------------------optional property--------------------
// la propiedad year? es opcional

const person2: { student: boolean, name: string, year?: number } = {
  student: false,
  name: "Pepe",

};
person.year = 2000;


//-----------------------Index Signatures-----------------------
// objetos sin una lista definida de propiedades.
const person3: { [index: string]: number } = {};
//