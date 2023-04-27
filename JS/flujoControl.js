
//---------------------breack-----------------------------------------
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      break; // Salir del bucle cuando i sea igual a 5
    }
    console.log(i);
  }

//--------------------continue------------------------------------------
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue; // Saltar esta iteración si i es par
    }
    console.log(i);
  }
  // Output: 1 3 5 7 9

//--------------------switch------------------------------------------
  let day = 3;
  let dayName;
  
  switch (day) {
    case 1:
      dayName = "Lunes";
      break;
    case 2:
      dayName = "Martes";
      break;
    case 3:
      dayName = "Miércoles";
      break;
    case 4:
      dayName = "Jueves";
      break;
    case 5:
      dayName = "Viernes";
      break;
    case 6:
      dayName = "Sábado";
      break;
    case 7:
      dayName = "Domingo";
      break;
    default:
      dayName = "Día inválido";
      break;
  }
  
  console.log(dayName); // "Miércoles"
  