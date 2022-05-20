//creamos las constantes para llamar a los arreglos que estan alamcenados en datos.js
const { mascota } = require("./datos.js");
const { responsable } = require("./datos.js");
const { administrativa } = require("./datos.js");


// Creamos la funcion buscarmascota con la cual buscaremos mascotas por su id
async function buscarmascotaporid(id)
{
    //se crea la constante mascotassss en la cual almacenaremos los arreglos que se guardaron en mascota y que luego se los buscara
    const mascotassss  = mascota.find((mascotassss)=> mascotassss.id=== id);
    //condicion que muestra error en el caso de que no exista un id
    if (!mascotassss)
    {
        const error= new Error();
        error.message=`El mascotas con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return mascotassss;
}

// Creamos la funcion buscar responsables con la cual buscaremos responsables por su id
function buscarresponsableporid(id)
{
    const responsablesssss =  responsable.find((responsablesssss)=> responsablesssss.id===id);
    if (!responsablesssss)
    {
        const error = new Error();
        error.message=`El responsable con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return responsablesssss;
}


//buscaremos las mascotas por su id
(async ()=> {
    try {
        const mascotassss =   await buscarmascotaporid(1);
        const responsablesssss = await buscarresponsableporid(mascotassss.idresponsables);
        mascotassss.responsablesssss= responsablesssss;
        delete mascotassss.idresponsables;
        console.log(mascotassss);
    } catch (error) {
        console.log(error.message)
    }
})();



