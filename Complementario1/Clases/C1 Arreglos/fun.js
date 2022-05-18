function operacion( n1, n2, operador)
{
    switch (operador) {
        case "+":
            return n1+n2;
        case "-":
            return n1-n2;
        case "*":
            return n1*n2;
        case "/":
            return n1/n2;
    
        default:
            return 0;
    }
}

function saludar(nombre)
{
    console.log('hola ${nombre}')
}


//expoertaciones de funciones
exports.module={
    iva:12,
    funcion1: operacion,
    saludar,
}