/**
 * 
 *     Juego: Piedra, Papel, Tijera
 * 
 */

console.log("Jugaremos a 'Piedra, Papel, Tijera' al mejor de tres.");
console.log("Cada jugador debe introducir su opción; Piedra, Papel o Tijera. Tienen que empezar por mayúscula.")

// Añado variables globales de las opciones de los Jugadores.
var opcionJ1;
var opcionJ2;

// Creo la función que inicializará el juego.
function juegoSwitch() {
    console.log("El Jugador 1 ha elegido " + opcionJugador1() + ", y el Jugador 2 ha elegido " + opcionJugador2());
    return ganador();
}

// Creo la función que pida al usuario introducir la opción del primer jugador.
function opcionJugador1() {

    var opcion = window.prompt("Selecciona la opción del Jugador 1");
    opcionJ1 = opcion;

    switch (opcion) {
        case 'Piedra':
            return opcion;
        case 'Papel':
            return opcion;
        case 'Tijera':
            return opcion;
        default:
            console.log("La opción escogida no existe. Por favor, introduce Piedra, Papel o Tijera (Recuerda que deben empezar por mayúscula).")
            opcionJugador1();
    }
}

function opcionJugador2() {

    var opcion = window.prompt("Selecciona la opción del Jugador 1");
    opcionJ2 = opcion;

    switch (opcion) {
        case 'Piedra':
            return opcion;
        case 'Papel':
            return opcion;
        case 'Tijera':
            return opcion;
        default:
            console.log("La opción escogida no existe. Por favor, introduce Piedra, Papel o Tijera (Recuerda que deben empezar por mayúscula).")
            opcionJugador2();
    }
}

// Creo la función que devuelve cuál es el ganador de la ronda.
function ganador() {

    // Creo identificadores para cada opcion.
    Pi = "Piedra";
    Pa = "Papel";
    Ti = "Tijera";

    switch (opcionJ1 | opcionJ2) {
        // Casos en los que gana el Jugador 2.
        case opcionJ1.Pi | opcionJ2.Pa:
        case opcionJ1.Pa | opcionJ2.Ti:
        case opcionJ1.Ti | opcionJ2.Pi:
            console.log("El ganador es Jugador 2 porque " + opcionJ2 + " gana a " + opcionJ1);
            break;
        // Casos en los que gana el Jugador 1.
        case opcionJ2.Pi | opcionJ1.Pa:
        case opcionJ2.Pa | opcionJ1.Ti:
        case opcionJ2.Ti | opcionJ1.Pi:
            console.log("El ganador es Jugador 1 porque " + opcionJ1 + " gana a " + opcionJ1);
            break;
        // Casos en los que los dos Jugadores empatan.
        default:
            console.log("Ambos Jugadores han escogido la misma opción, por lo que hay un empate.")
    }
}

juegoSwitch();