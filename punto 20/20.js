// Operador ternario:
// Pide al usuario un número y muestra "Par" o
// "Impar" usando un operador ternario.

let numero = prompt("ingresar un numero del 1 al 10 ") ;
let par = [2, 4, 6, 8, 10];
 let impar = [1, 3, 5, 7, 9];

for (let i = 0; i < impar.length; i++){
    if (numero==impar[i])
        console.log ("este numero" + numero +  "es impar");
 } 

for (let i = 0; i < par.length; i++){
    if (numero==par[i])
        console.log ("este numero"  + numero +  "es par");
} 



