// 18. Usa operadores lógicos (&&, ||):
// Pide al usuario su edad y verifica si está
// entre 18 y 65 años (para "puede trabajar")

let usuario = prompt("Ingresa tu usuario");
let edad = Number(prompt("Ingresa tu edad"));

if (edad >= 18 && edad <= 65) {
    console.log(usuario + " puede trabajar");
} else {
    console.log(usuario + " no puede trabajar");
}