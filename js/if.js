/**
 * 
 *     Juego: Piedra, Papel, Tijera
 * 
 */

console.log("Jugaremos a 'Piedra, Papel, Tijera'.");
console.log("Cada jugador debe introducir su opción; Piedra, Papel o Tijera. Tienen que empezar por mayúscula.")

// Añado variables globales de las opciones de los Jugadores.
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

    else {
        console.log("La opción escogida no existe. Por favor, introduce Piedra, Papel o Tijera (Recuerda que deben empezar por mayúscula).");
        // Se ejecuta de nuevo esta misma función para que el Jugador 1 introduzca su opción.
        opcionJugador1();
    }
}

// Creo la función que pida al usuario introducir la opción del segundo jugador.
function opcionJugador2() {

    var opcion = window.prompt("Selecciona la opción del Jugador 2");
    opcionJ2 = opcion;

    if (opcion === "Piedra" || opcion == "Papel" || opcion == "Tijera") {
        return opcion;
    }

    else {
        console.log("La opción escogida no existe. Por favor, introduce Piedra, Papel o Tijera (Recuerda que deben empezar por mayúscula).");
        // Se ejecuta de nuevo esta misma función para que el Jugador 2 introduzca su opción.
        opcionJugador2();
    }
}

// Creo la función que devuelve cuál es el ganador de la ronda.
function ganador() {

    // Situaciones en las que gana el Jugador 2.
    if (opcionJ1 === "Piedra" && opcionJ2 === "Papel" || opcionJ1 === "Papel" && opcionJ2 === "Tijera" || opcionJ1 === "Tijera" && opcionJ2 === "Piedra") {
        console.log("El ganador es Jugador 2 porque " + opcionJ2 + " gana a " + opcionJ1);
    }

    // Situaciones en las que gana el Jugador 1.
    else if (opcionJ2 === "Piedra" && opcionJ1 === "Papel" || opcionJ2 === "Papel" && opcionJ1 === "Tijera" || opcionJ2 === "Tijera" && opcionJ1 === "Piedra") {
        console.log("El ganador es Jugador 1 porque " + opcionJ1 + " gana a " + opcionJ2);
    }

    // Todo lo demás es empate.
    else {
        console.log("Ambos Jugadores han escogido la misma opción, por lo que hay un empate.")
    }
}

// Llamo a la función principal para que se ejecute al cargar la página.
juego();

// Desde aquí hago que se ejecute el juego desde el fichero de switch.js.
console.log("Ahora se ejecutará el juego con el fichero de switch.js");
juegoSwitch().juegoSwitch;