// se crean la funcion suma

const sumar = (numero1, numero2) => numero1 + numero2;

// se eliminó la funcion de resta

// se crea la funcion multiplicacion desde Codespaces

const multiplicar = (numero1, numero2) => numero1 * numero2;

// se crea la funcion de factorial
function factorial(position) {
    if (position == 0) {
        return 1   
    }
    return position*factorial(position -1)
}