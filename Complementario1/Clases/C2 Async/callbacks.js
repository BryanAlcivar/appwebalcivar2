 //creamos la constante platos y en ella se definiran sus arreglos
 const platos=[
    {
        id:1,
        descripcion:'Encebollado',
        idrestaurante:1,
    },
    {
        id:2,
        descripcion:'Ceviche',
        idrestaurante:1,
    },
    {
        id:3,
        descripcion:'Tigrillo',
        idrestaurante:2,
    },
    {
        id:4,
        descripcion:'Tostadas',
        idrestaurante:2,
    },

 ]
 //creamos la constante restaurante y en ella se definiran sus arreglos
 const restaurantes=[
     {
        id:1,
        nombre:'La carreta de Tono',
     },
     {
        id:2,
        nombre:'Miguelito Restaurant',
     },
 ]
// Creamos la funcion buscar plato por su id
 function buscarPlatoPorId(id, callback)
 {
     //creamos la constante plato en la que guardaremos los datos de los arreglos de platos
    const plato =  platos.find((plato)=>  plato.id=== id );

    //condicion en la que si no esta el plato con su id, mostrara el mensaje de error
    if (!plato)
    {
        const error =  new Error();
        error.message=`Plato no encontrado con id ${id}`;
        return callback(error)
    }
    return callback(null, plato);
 }

 //// Creamos la funcion buscar restaurante por id
 function buscarRestaurantePorId(id, callback)
 {
     const restaurante = restaurantes.find((restaurante)=> restaurante.id=== id);   //5==='5'
     if (!restaurante)
     {
         const error =  new Error();
         error.message=`Restaurante con id ${id} no ha podido ser encontrado`;
         return callback(error)
     }
     return callback(null, restaurante);
 }

 //definimos el id del plato que queremos buscar y si este no está, mostrara un error por consola
 buscarPlatoPorId(3, (err, plato)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    buscarRestaurantePorId(plato.idrestaurante  , (err, restaurante)=>{
        if (err)
        {
            console.log(err.message);
            return;
        }
        plato.restaurante = restaurante;
        delete plato.idrestaurante;
        console.log(plato);
        // buscarCiudadPorId(idciudad, (err, ciudad)=>{
        //     if (err)
        //     {

        //     }
        //     //
        // })
        
    })
 })





 