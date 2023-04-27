
function fechas (fecha){

    this.fecha = fecha;
    this.toDateString = fecha.toDateString()
    this.getFullYear = fecha.getFullYear()
}

let fechaActual = new Date();
let infoFecha = new fechas(fechaActual);

infoFecha.fecha //Sun Mar 26 2023 18:44:38 GMT-0500 (hora estándar de Colombia)

infoFecha.toDateString //'Sun Mar 26 2023'

infoFecha.getFullYear   //2023