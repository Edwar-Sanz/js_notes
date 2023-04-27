function mostrar_ocultar(iden, boton){

    let elemento = document.getElementById(iden);
    let estilo = window.getComputedStyle(elemento).display;

    if (estilo === "none") {     
        elemento.style.display = "inline";
        estilo = window.getComputedStyle(elemento).display;
        document.getElementById(boton).innerHTML = "Ocultar";
    }else{
        elemento.style.display = "none";
        estilo = window.getComputedStyle(elemento).display;
        document.getElementById(boton).innerHTML = "Mostrar";
    }
}

function crear_div(){
    const new_div = document.createElement("div");      // crear el nuevo div
    let num_div = document.getElementById("tablero").childElementCount; // cuenta cuantos divs hay adentro
    new_div.innerHTML = "Div: "+ num_div;   // pone el nombre al div
    new_div.setAttribute("id", `div ${num_div}`);  // crear el id del elemento
    // agrega estilos
    new_div.style.backgroundColor = "yellow";
    new_div.style.borderColor = "black";
    new_div.style.border = "solid";

    document.getElementById("tablero").appendChild(new_div); // agrega el nuevo div
}

function delete_divs() {
    let tablero = document.getElementById("tablero"); // obtiene el id del nodo padre
    let num_div = document.getElementById("tablero").childElementCount; // cuenta la cantidad de divs para hacer el calculo del id del div
    let id_div = "div " + (num_div - 1); // se crear la variable con el id del último div
    let drop_div = document.getElementById(id_div); // se crea la variable para div hijo tomando el id calculado en la variable anterior
    let drop_last = tablero.removeChild(drop_div); // se elimina el div hijo
}


function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
}
function mUp(obj) {
    obj.style.backgroundColor="blue";
    obj.innerHTML="Thank You";
}


function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }


