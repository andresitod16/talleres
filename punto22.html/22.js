// 1. Calculadora con switch
// a. Pide al usuario:
// i. Un número (num1).
// ii. Otro número (num2).
// iii. Una operación (+, -, *, /).
// b. Usa switch para calcular y mostrar el
// resultado de la operación.
// c. Si la operación no es válida, muestra
// "Operador desconocido" (default).

let num1= Number(prompt( "ingresa un numero"));
let num2= Number(prompt("ingresa un numero"));
let operacion = prompt("ingresa una operacion +, -, *, /")
switch (operacion) {
    case "+":
        console.log("resultado: " + (num1 + num2));
        break;

    case "-":
        console.log("resultado :" + (num1-num2));
        break;
        case "*":
            console.log ("resultado :" + (num1 * num2));
            break;
            case "/":
            
            console.log ("resultado :" + (num1 / num2  ));
break;
            default:
                console.log ("operacion no valida ")
}
