/*Recorrer el arreglo definido en la opción anterior y mostrarlo*/

const { Comidas } = require("./Ejercicio3.js");


let a = 0;
do{
    
    console.log("Comida "+ (a+1) + ":");
  
    console.log(Comidas[a]);
   
    a++;
}
while  (a< Comidas.length)

/* Alcivar Pilay Bryan - APP Web II - 6 "A" */