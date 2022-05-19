//creamos las constantes para llamar a los arreglos que estan alamcenados en datos.js
const { mascota } = require("./datos.js");
const { responsable } = require("./datos.js");
const { administrativa } = require("./datos.js");

// Creamos la funcion buscarmascota con la cual buscaremos mascotas por su id
 function buscarmascotaporid(id)
 {
     return new Promise((resolve, reject)=>{
        const mascotassss =  mascota.find((mascotassss)=> mascotassss.id=== id);
        if (!mascotassss)
        {
            const error= new Error();
            error.message=`La mascota con id ${id} no pudo ser encontrado`;
            reject(error);
        }
        resolve(mascotassss);

     })

 }
 // Creamos la funcion buscarresposables con la cual buscaremos responsables por su id
 function asociarResponsableAlaMascota(mascotassss)
{
    return new Promise((resolve,reject)=>{
        const responsablesssss =  responsable.find((responsablesssss)=> responsablesssss.id===mascotassss.idresponsables);
        if (!responsablesssss)
        {
            const error= new Error();
            error.message=`El responsable con id ${id} no pudo ser encontrado`;
            reject(error)
        }
        mascotassss.responsablesssss= responsablesssss;
        delete mascotassss.idresponsables;
        resolve(mascotassss);
    })
}
//  function buscarresponsableporid(id)
// {
//     return new Promise((resolve,reject)=>{
//         const responsablesssss =  responsable.find((responsablesssss)=> responsablesssss.id===id);
//         if (!responsablesssss)
//         {
//             const error= new Error();
//             error.message=`El responsable con id ${id} no pudo ser encontrado`;
//             reject(error)
//         }
//         resolve(responsablesssss);
//     })
// }

// let mascotaaux={};

//buscamos la mascota y nos mostrara los datos
buscarmascotaporid(2)
.then((mascotassss)=>{
    // console.log(mascotassss)
    // mascotaaux= mascotassss;
    // return buscarresponsableporid(mascotassss.idresponsables);
    return asociarResponsableAlaMascota(mascotassss)
})
.then((mascotassss)=>{
    console.log(mascotassss)
})
// .then((responsablesssss)=>{
//     mascotaaux.responsablesssss= responsablesssss;
//     delete mascotaaux.idresponsables;
//     console.log(mascotaaux)
// })
.catch((motivo)=>{
    console.log(motivo.message)
})



//  buscarresponsableporid(23)
//  .then((responsablesssss)=>{
//      console.log(responsablesssss)
//  })
//  .catch((motivo)=>{
//     console.log(motivo.message)
//  })