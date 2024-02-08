// Calculadora
let num1; 
let num2; 
let resultado;

function calcularResultado(simbolo, num1, num2) {
    resultado;
    switch (simbolo) {
        case '+':
            resultado = num1 + num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        default:
            alert('Operador no reconocido');
            break;
    }
    return resultado;
}


for (let i = 0; i < 4; i++) {

    let operador = prompt('Ingrese el operador (+, -, *, /)');

    if (operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/') {
        alert('Operador no reconocido');
        continue;
    }

    num1 = parseInt(prompt('Primer numero')); 
    num2 = parseInt(prompt('Segundo numero'));



    resultado = calcularResultado(operador, num1, num2);

    alert('El resultado es:  ' + resultado);
    
}






