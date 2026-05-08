// 1. Día de la semana
// a. Pide al usuario un número del 1 al 7
// (usando prompt).
// b. Usa switch para mostrar el nombre del
// día correspondiente (1 = Lunes, 2 =
// Martes, etc.).
// c. Si el número no está entre 1 y 7, muestra
// "Día no válido" (usando default)

let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let ingresar = Number(prompt("ingrese un numero del 1 al 7"));

switch (ingresar) {
    case 1:
        console.log(dias[0]);
        break;
    case 2:
        console.log(dias[1]);
        break;
    case 3:
        console.log(dias[2]);
        break;
    case 4:
        console.log(dias[3]);
        break;
    case 5:
        console.log(dias[4]);
        break;
    case 6:
        console.log(dias[5]);
        break;
    case 7:
        console.log(dias[6]);
        break;
    default:
        console.log ("dia no valido");
    

}

    
