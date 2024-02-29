const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: División por cero";
        }
    }
};

function ingresarNumero(mensaje) {
    return parseFloat(prompt(mensaje));
}
function calcular() {
    let continuar = true;

    while (continuar) {
        const operacion = prompt("Ingrese la operación a realizar (+, -, *, /) o 'fin' para salir:");
        
        if (operacion.toLowerCase() === 'fin') {
            continuar = false;
            break;
        }

        const num1 = ingresarNumero("Ingrese el primer número:");
        const num2 = ingresarNumero("Ingrese el segundo número:");

        let resultado;

        switch (operacion) {
            case '+':
                resultado = calculadora.sumar(num1, num2);
                break;
            case '-':
                resultado = calculadora.restar(num1, num2);
                break;
            case '*':
                resultado = calculadora.multiplicar(num1, num2);
                break;
            case '/':
                resultado = calculadora.dividir(num1, num2);
                break;
            default:
                resultado = "Operación no válida";
        }

        alert(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
        console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
    }
}


calcular();