
//-----Promesas----------------
let time = 3000;
let data = [1,2,3, "data"];
// la Promise resive una funcion, esa funcion tiene dos argumentos (Resolve, Reject)
const myPromise = new Promise( function(Resolve, Reject){
    if(time <= 3000 && data.length != 0){            // se hacen validaciones
        setTimeout(()=>{ Resolve(data); }, time);    // si se cumple la condicion Resolve retorna [1,2,3, "data"]
    }else{ 
        Reject("Error");                             // si no se cumple Reject retorna el valor indicado
    }
});
        
myPromise.then((resolve)=> console.log(resolve))     //resolve esta asociado con el .then
         .catch((reject)=> console.log(reject));    //reject  esta asociado con el .catch

//Await 
// La palabra clave await hace que la función pause la ejecución 
//y espere una promesa resuelta antes de continuar
async function await_data(){
    try{
        const data_resuelta = await myPromise;  // En esta parte se espera a que la promesa sea resuelta
        console.log(data_resuelta);
    }catch(err){
        console.log(err.message);
    }
}