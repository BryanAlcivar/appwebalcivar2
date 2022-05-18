const persona = {
    nombre: "Homero",
    Apellidos: "Simpson",
    esDoncente: true,
    geolocalizacion: {
        lat:551555555,
        lng:30.555555,
    },
    getNombreCompleto: function(){
        return '${this.nombre} ${this.apellifdos}'
        //return 'MiguelSanchez';
    }
}

//console.log(persona.getNombreCompleto);

function mostrarDatos(nombre, apellifdos, geolocalizacion {lat,lng})
{
    console.log(persona.nombre)
    console.log(persona.Apellidos)
    console.log(persona.geolocalizacion.lat)
    console.log(persona.geolocalizacion.lng)
}
mostrarDatos(persona)