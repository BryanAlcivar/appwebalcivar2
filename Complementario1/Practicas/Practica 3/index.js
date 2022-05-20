//Conexion
const mongoose = require('mongoose');
const conexion = 'mongodb+srv://admin1:admin1@cluster0.cgxph.mongodb.net/Refugio?retryWrites=true&w=majority';  // Conexion a la base de mongoDB Atlas

//Conexion
(async () => {
    const estadoConexion = await mongoose.connect(conexion)

// Variables del Personal Administrativo
    const administrativa = mongoose.model('administrativa', 
    { 
        Nombre: String , 
        TelefonoRefugio: String,
    })

// Variables de Adoptantes
    const adoptantes = mongoose.model('adoptantes', 
    { 
        cedula: String , 
        NombreAdoptante: String,
        Direccion: String,
        Telefono: String,
    })

// Variables de Mascotas
    const Mascotas = mongoose.model('Mascotas', 
    { 
        Raza: String , 
        Edad: String,
        Condiciones: String,
        Descripcion: String,
        NombreMascota: String,
        IdAdoptantes: {type: mongoose.Types.ObjectId, ref: 'adoptantes'},
    })

// Variables de detalles de adopcion
    const DetallesAdopcion = mongoose.model('DetallesAdopcion', 
    { 
        FechaAdopcion: String, 
        MascotaAdoptada: String,
        IdAdministrdaor: {type: mongoose.Types.ObjectId, ref: 'administrativa'},
        NombreDelAdoptante: String,
        NombreAdministrador: String,
        DireccionDelAdoptante: String,

    })

    
// Agregado de Datos del Administrador de Refugio
    const admin1 = new administrativa({ Nombre: 'Holguín Gongora Anthony',TelefonoRefugio: '0987654321', })
        const guardarAdmin1 = await admin1.save(); //Guardado de Datos

// Agregado de Datos del Administrador de los Adoptantes
    const adoptante1 = new adoptantes({ cedula: '1316617123',NombreAdoptante:'Matheud Quijije Alava',Direccion: 'La Aurora, Manta',Telefono:'0987654364', })
    const adoptante2 = new adoptantes({ cedula: '1316617123',NombreAdoptante:'Parrales Mero Yordy',Direccion: 'Los Electricos',Telefono:'0987654364', })
    const adoptante3 = new adoptantes({ cedula: '1316617123',NombreAdoptante:'Alcivar Pilay Bryan',Direccion: 'Santa Clara',Telefono:'0987654364', })
    const adoptante4 = new adoptantes({ cedula: '1316617123',NombreAdoptante:'Miguel Sanchez Timon',Direccion: 'La Proaño',Telefono:'0987654364', })
    


    // guardado
    const GUARDAADOPCION1 = await adoptante1.save();
    const GUARDAADOPCION2 = await adoptante2.save();
    const GUARDAADOPCION3 = await adoptante3.save();
    const GUARDAADOPCION4 = await adoptante4.save();
    


//Agregado de datos de las mascotas
    const mascota1 = new Mascotas({
        Raza: 'Chola', 
        Edad: '5 años',
        Condiciones: 'Saludable',
        Descripcion:'Pequeño, ojos color cafe, orejon',
        NombreMascota: 'Firulais',
        IdAdoptantes: GUARDAADOPCION1._id,
    });
    const guardamascota1 = await mascota1.save();

    const mascota2 = new Mascotas({
        Raza: 'Cachuda', 
        Edad: '2 años',
        Condiciones: 'Mas o menos',
        Descripcion:'Pelaaje largo, color bonito, ojos saltones',
        NombreMascota: 'Calamardo',
        IdAdoptantes: GUARDAADOPCION2._id,
    });
    const guardamascota2 = await mascota2.save();

    const mascota3 = new Mascotas({
        Raza: 'Fina', 
        Edad: '6 años',
        Condiciones: 'Saludable',
        Descripcion:'Gordito, pequeño, colorado',
        NombreMascota: 'Clarence',
        IdAdoptantes: GUARDAADOPCION3._id,
    });
    const guardamascota3 = await mascota3.save();

    const mascota4 = new Mascotas({
        Raza: 'Crepa', 
        Edad: '9 años',
        Condiciones: 'Saludable',
        Descripcion:'Grande',
        NombreMascota: 'Ralf',
        IdAdoptantes: GUARDAADOPCION4._id,
    });
    const guardamascota4 = await mascota4.save();


//Detalles de las adopciones
    const detalle1 = new DetallesAdopcion ({
        FechaAdopcion: '2020/01/29',
        MascotaAdoptada: mascota1.NombreMascota,
        IdAdministrdaor: guardarAdmin1._id,
        NombreAdministrador: admin1.Nombre,
        DireccionDelAdoptante: adoptante1.Direccion,
        NombreDelAdoptante: adoptante1.NombreAdoptante,
    })
    const guardadetalle1 = await detalle1.save();

    const detalle2 = new DetallesAdopcion ({
        FechaAdopcion: '2021/05/23',
        MascotaAdoptada: mascota2.NombreMascota,
        IdAdministrdaor: guardarAdmin1._id,
        NombreAdministrador: admin1.Nombre,
        DireccionDelAdoptante: adoptante2.Direccion,
        NombreDelAdoptante: adoptante2.NombreAdoptante,
    })
    const guardadetalle2 = await detalle2.save();

    const detalle3 = new DetallesAdopcion ({
        FechaAdopcion: '2020/09/19',
        MascotaAdoptada: mascota3.NombreMascota,
        IdAdministrdaor: guardarAdmin1._id,
        NombreAdministrador: admin1.Nombre,
        DireccionDelAdoptante: adoptante3.Direccion,
        NombreDelAdoptante: adoptante3.NombreAdoptante,
    })
    const guardadetalle3 = await detalle3.save();

    const detalle4 = new DetallesAdopcion ({
        FechaAdopcion: '2022/01/30',
        MascotaAdoptada: mascota4.NombreMascota,
        IdAdministrdaor: guardarAdmin1._id,
        NombreAdministrador: admin1.Nombre,
        DireccionDelAdoptante: adoptante4.Direccion,
        NombreDelAdoptante: adoptante4.NombreAdoptante,
    })
    const guardadetalle4 = await detalle4.save();
 

//Muestra de Resultados
    const resultado = await Mascotas.find()
    console.log(resultado) 
})()
