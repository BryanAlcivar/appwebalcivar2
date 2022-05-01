/* TEMA: REFUGIO CANINO
   Brindar refugio a perritos de la calle y que cada uno pueda ser adoptado :)
*/
const administrativa =[  // Datos del Personal Administrativo
{
    Nombre:'Holguin',
    Telfrefugio:'0987654321',
}
]

 const mascota=[  // Datos de las mascotas
    {
        id:1,
        raza:'calle',
        edad:'3 años',
        condiciones:'Saludable',
        descripcion:'pelaje lazio, ojos cafe',
        idresponsables:1,
    },
    {
        id:2,
        raza:'barrio',
        edad:'10 años',
        condiciones:'Saludable',
        descripcion:'pelaje bacan, ojos negros',
        idresponsables:1,
    },
    {
        id:3,
        raza:'casa',
        edad:'1 años',
        condiciones:'Saludable',
        descripcion:'pelaje lazio, ojos rojos',
        idresponsables:1,
    },
    {
        id:4,
        raza:'pelucon',
        edad:'2 años',
        condiciones:'Saludable',
        descripcion:'pelaje lazio, ojos cafe',
        idresponsables:2,
    },

 ]
 const responsable=[   // Datos de los adoptantes
     {
        id:1,
        cedula:'1314567890',
        nombrerp:'Miguelito',
        direccion:'Manta',
        telefono:'0987654567'
     },
     {
        id:2,
        cedula:'1314567890',
        nombrerp:'Holguin',
        direccion:'Manta',
        telefono:'0987654567'
     },
 ]

 module.exports = {
    mascota,
    responsable,
    administrativa
}

