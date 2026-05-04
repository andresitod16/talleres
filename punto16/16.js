// 16. Compara dos números ingresados por el
// usuario (num1, num2) y muestra cuál es
// mayor o si son iguales.

let num1 = (prompt("ingrese un numero"));
let num2 = (prompt("ingrese un numero"));
if (num1>num2){
    console.log ("el numero mayor es ", num1)
} else if (num1<num2) { 
    console.log("el numero mayor es ", num2)
} else if (num1 == num2) {
    console.log (num1 + " y " + num2 + "son iguales");
}