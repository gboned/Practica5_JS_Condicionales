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
            console.log(opcion);
            break;
        case 'Papel':
            console.log(opcion);
            break;
        case 'Tijera':
            console.log(opcion);
            break;
        default:
            console.log("La opción escogida no existe. Por favor, introduce Piedra, Papel o Tijera (Recuerda que deben empezar por mayúscula).")
            opcionJugador1();
    }
}