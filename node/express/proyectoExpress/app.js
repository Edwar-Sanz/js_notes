
const express = require("express");
const app = express();

const {datos} = require("./datos.js");

//routing
app.get("/",(req, res)=>{res.send("Hola mundo")});
app.get("/api/datos",(req, res)=>{res.send(JSON.stringify(datos))});
app.get("/api/datos/professors",(req, res)=>{res.send(JSON.stringify(datos.professors))});


const PORT = process.env.PORT || 3000;
app.listen(PORT, 
  ()=>{console.log("server on")}  
);




