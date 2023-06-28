let elementoPresentado; // Variable global

function capturarNombre() {
    let jugador = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    if (jugador) {
        jugador = jugador.toLowerCase();
        let spanJugador = document.getElementById("jugador");
        let nombresJugadores = {
            "mario": "Mario",
            "luigi": "Luigi",
            "bowser": "Bowser Morton Koopa",
            "peach": "Princesa Peach Toadstool",
            "yoshi": "T. Yoshisaur Munchakoopas",
            "toad": "Toad",
            "toadette": "Toadette",
            "daisy": "Princesa Daisy"
        };

        if (nombresJugadores.hasOwnProperty(jugador)) {
            spanJugador.textContent = nombresJugadores[jugador];
            elementoPresentado = document.getElementById(jugador); // Asignar el elemento a la variable global
            if (elementoPresentado) {
                elementoPresentado.setAttribute("title", "Presentado");
            }
        } else {
            spanJugador.textContent = "desconocido";
        }

        var presentarDiv = document.getElementById("presentarDiv");
        //presentarDiv.style.display = "none";
    }
}
