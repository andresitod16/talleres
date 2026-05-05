// 19. Juego de adivinanza:
// a. Genera un número aleatorio entre 1 y 10.
// Puedes hacerlo así:
// const aleatorio =
// Math.floor(Math.random() * 10) + 1;
// b. Pide al usuario que adivine el número.
// c. Usa condicionales para decirle si acertó
// o no.


const aleatorio = Math.floor(Math.random()*10) + 1 ;

let adivinanza = Number(prompt("adivina el numero del 1-10"));
if (adivinanza == aleatorio){
console.log ("ganaste")
} else {
    console.log ("perdiste el numero es" + aleatorio);
}
