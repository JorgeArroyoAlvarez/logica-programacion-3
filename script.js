
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function solicitarNumeroYCalcularFactorial() {
    let numero = prompt("Por favor, ingresa un número:");


    numero = parseFloat(numero);

    if (isNaN(numero) || !isFinite(numero)) {
        alert("El valor ingresado no es un número válido. Por favor, inténtalo de nuevo.");
        solicitarNumeroYCalcularFactorial(); // Volver a solicitar el dato
    } else {

        const resultado = factorial(numero);

        console.log(`El factorial de ${numero} es ${resultado}`);

        const resultadoElement = document.createElement('div');
        resultadoElement.textContent = `El factorial de ${numero} es ${resultado}`;
        document.body.appendChild(resultadoElement);
    }
}

solicitarNumeroYCalcularFactorial();
