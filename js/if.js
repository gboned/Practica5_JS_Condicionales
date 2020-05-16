/**
 * 
 *     Juego: Piedra, Papel, Tijera
 * 
 */

console.log("Jugaremos a 'Piedra, Papel, Tijera' al mejor de tres.")

function juego() {
    return opcionJugador1("patata");
}

function opcionJugador1(opcion) {
    if (opcion === "Piedra" || opcion == "Papel" || opcion == "Tijera") {
        return opcion;
    }

    else if (opcion === "piedra" || opcion == "papel" || opcion == "tijera") {
        return opcion;
    }

    else {
        console.log("La opción escogida no existe. Por favor, introduce piedra, papel o tijera".);
    }
}