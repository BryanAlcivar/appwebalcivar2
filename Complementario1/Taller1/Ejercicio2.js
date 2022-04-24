/*2.	Crear un objeto Comida que tenga como parámetros: nombre, ingredientes, tipo (ensalada, plato fuerte, entrada, etc.) y cualquier otro atributo que considere importante para su diseño.*/

const comida={
    nombre: ' Cremita',
    ingredientes: "Espinaca",
    tipo : 'Almuerzo',
    getpersonalida(){
        return `${this.nombre} ${this.tipo} ${this.ingredientes}`;
    }

}

function imprimir({nombre,tipo,ingredientes})
{
    console.log(nombre)
    console.log(tipo)
    console.log(ingredientes)
}
imprimir(comida)

/* Alcivar Pilay Bryan - APP Web II - 6 "A" */