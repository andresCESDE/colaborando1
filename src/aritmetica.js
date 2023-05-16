function suma(numero1, numero2) {
    return numero1 + numero2
}

function resta(numero1, numero2) {
    return numero1 - numero2;
}

const multiplicar = (numero1, numero2) => numero1 * numero2;

// se crea la funcion de factorial
function factorial(position) {
    if (position == 0) {
        return 1   
    }
    return position*factorial(position -1)
}

const fibonacci = (posicion) => {
  if (posicion == 0) return 0;
  if (posicion == 1) return 1;
  return fibonacci(posicion -1) + fibonacci(posicion -2);
}


