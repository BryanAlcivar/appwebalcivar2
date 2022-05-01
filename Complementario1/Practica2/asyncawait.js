const { mascota } = require("./datos.js");
const { responsable } = require("./datos.js");
const { administrativa } = require("./datos.js");

async function buscarmascotaporid(id)
{
    const mascotassss  = mascota.find((mascotassss)=> mascotassss.id=== id);
    if (!mascotassss)
    {
        const error= new Error();
        error.message=`El mascotas con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return mascotassss;
}
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



