
//------------------------then -vs- async await-----------------


//------------------------then -----------------------
function getData() {
    return fetch('https://reqres.in/api/users') //recupera datos de la api
      .then(response => response.json())     // los transforma
      .then(data => console.log(data.data[0])) // los imprime
      .catch(error => console.log(error)); 
  }
//llamando la función
getData();


//------------------------async await-----------------
async function getData2() {
  const response = await fetch('https://www.boredapi.com/api/activity/'); //recupera datos de la api
  const data = await response.json(); // los transforma
  console.log(data); // los imprime
}
// llamando la función
getData2();


//---------------sintaxis---------------------------

//-- then/catch----------


function thenCatchSintasix(){
  promesa
    .then(
      (result)=>{
        console.log(result)
      }
    )
    .catch(
      (error)=>{
        console.log(error)
      }
    )
    .finally(
      ()=>{
        console.log("ok")
      }
    );
}

//--- async/await-------------

async function asyncAwaitSintaxis (){
  try{
    const result = await promesa;
    console.log(result)
  }catch{
    console.log(error);
  }finally{
    console.log("ok");
  }

}


