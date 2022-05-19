//creamos las constantes para llamar a los arreglos que estan alamcenados en datos.js
const { mascota } = require("./datos.js");
const { responsable } = require("./datos.js");
const { administrativa } = require("./datos.js");


// Creamos la funcion buscarmascota con la cual buscaremos mascotas por su id
 function buscarmascotaporid(id, callback)
 {
    const mascotassss =  mascota.find((mascotassss)=>  mascotassss.id=== id );
    if (!mascotassss)
    {
        const error =  new Error();
        error.message=`Mascota no encontrado con id ${id}`;
        return callback(error)
    }
    return callback(null, mascotassss);
 }

 // Creamos la funcion buscar responsables con la cual buscaremos mascotas por su id
 function buscarresponsableporid(id, callback)
 {
     const responsablesssss = responsable.find((responsablesssss)=> responsablesssss.id=== id);   
     if (!responsablesssss)
     {
         const error =  new Error();
         error.message=`Responsable con id ${id} no ha podido ser encontrado`;
         return callback(error)
     }
     return callback(null, responsablesssss);
 }

 //buscamos la mascota y nos mostrara los datos, ademas si no existe su id nos dará error por consola
 buscarmascotaporid(3, (err, mascotassss)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    buscarresponsableporid(mascotassss.idresponsables  , (err, responsablesssss)=>{
        if (err)
        {
            console.log(err.message);
            return;
        }
        mascotassss.responsablesssss = responsablesssss;
        delete mascotassss.idresponsables;
        console.log(mascotassss);
      
    })
 })







 