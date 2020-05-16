/**
 * 
 *     Juego: Piedra, Papel, Tijera
 * 
 */

console.log("Jugaremos a 'Piedra, Papel, Tijera' al mejor de tres.");
console.log("Cada jugador debe introducir su opción; piedra, papel o tijera. Pueden comenzar tanto con minúscula como con mayúscula.")

function juego() {
    return opcionJugador1();
}

function opcionJugador1() {

    var opcion = window.prompt("Selecciona la opción del Jugador 1");

    if (opcion === "Piedra" || opcion == "Papel" || opcion == "Tijera") {
        return opcion;
    }

    else if (opcion === "piedra" || opcion == "papel" || opcion == "tijera") {
        return opcion;
    }

    else {
        console.log("La opción escogida no existe. Por favor, introduce piedra, papel o tijera.");
    }
}