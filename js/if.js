/**
 * 
 *     Juego: Piedra, Papel, Tijera
 * 
 */

console.log("Jugaremos a 'Piedra, Papel, Tijera' al mejor de tres.");
console.log("Cada jugador debe introducir su opción; piedra, papel o tijera. Pueden comenzar tanto con minúscula como con mayúscula.")

var opcionJ1;
var opcionJ2;

// Creo la función que inicializará el juego.
function juego() {
    console.log("El Jugador 1 ha elegido " + opcionJugador1() + ", y el Jugador 2 ha elegido " + opcionJugador2());
    return ganador();
}

// Creo la función que pida al usuario introducir la opción del primer jugador.
function opcionJugador1() {

    var opcion = window.prompt("Selecciona la opción del Jugador 1");
    opcionJ1 = opcion;

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

// Creo la función que pida al usuario introducir la opción del segundo jugador.
function opcionJugador2() {

    var opcion = window.prompt("Selecciona la opción del Jugador 2");
    opcionJ2 = opcion;

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

// Creo la función que devuelve cuál es el ganador de la ronda.
function ganador() {

    if ( opcionJ1 === "Piedra" && opcionJ2 === "Papel") {
        console.log("El ganador es Jugador 2 porque " + opcionJ2 + " gana a " + opcionJ1);
    }
}