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