const { mascota } = require("./datos.js");
const { responsable } = require("./datos.js");
const { administrativa } = require("./datos.js");

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