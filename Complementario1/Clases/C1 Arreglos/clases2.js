/*
class Persona
{
    constructor(nombre, apellido)
    {
        this.nombre=nombre;
        this.apellido=apellido;
    }
    getNombreCompleto()
    {
        return '${this.nombre} ${this.apellidos}'
    }
}

const persona= new Persona("Bryan", "Alcivar");
console.log(persona.getNombreCompleto());
*/

class Prueba
{
    constructor (Nombre, Apellido)
    {  
    this.Nombre=Nombre;
    this.Apellido=Apellido;
    }
    persona ={
        Nombre:"",
        Apellido: "",
        esDocente:"",
        geolocalizacion:{
            lat:151515.55515,
            lng:848455.515551,
    },
    Prueba:()=>{
        return this.Nombre;
    }
}
}
let persona = new Prueba('Bryan','Alcivar');
console.log(persona.persona.Prueba())
