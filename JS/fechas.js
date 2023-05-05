
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


getDate() //devuelve el día del mes (1 a 31).
getDay() //devuelve el número del día de la semana desde 0 (domingo) hasta 6 (sábado).
getFullYear() //cuatro dígitos del año.
getHours() //hora en formato 24h (0 a 23).
getMilliseconds() //milisegundos de la fecha especificada (0 a 999).
getMinutes() //devuelve los minutos (0 a 59).
getMonth() //devuelve el número del mes desde 0 (enero) hasta 11 (diciembre).
getSeconds() //devuelve el número de segundos (0 a 59).
toLocaleDateString() //devuelve una cadena con la fecha completa, en formato de fecha local.
toLocaleTimeString() //devuelve una cadena con la hora completa, en formato de hora local.