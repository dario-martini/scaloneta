
//-------------------------------------LUCES DE LA SCALONETA------------------------------------------------


let luces = document.querySelector(".boton--luz");
luces = false;
let lampara = document.querySelector(".conductor--luces");
//lampara.style.backgroundColor = "black";
let lamparaD = document.querySelector(".luces--d");
//lamparaD.style.backgroundColor = "black";

const iluminar = () => {
    if (
        luces == false
    ) {
        lampara.style.backgroundColor = "black";
        lamparaD.style.backgroundColor = "black";
        luces = true;
    }
    else {
        lampara.style.backgroundColor = "yellow";
        lamparaD.style.backgroundColor = "yellow";
        luces = false;
    }
}

//---------------------------------------MUSICA------------------------------------------------------------------

let musica = new Audio('img/aliento.mp3');
let musicaBarra = false;
//console.log(musica);
const reproducir = () => {
    if (musicaBarra == false) {
        musica.play();
        musicaBarra = true;
    }
    else {
        musica.pause();
        musicaBarra = false;
    }
}

//--------------------------------------------ARRANCAR----------------------------------------------------------------

let izquierda = 0;
let derecha = 0;
let velocidad = 10;
const colectivo = document.querySelector(".colectivo");
let pasaje = 0;
let parar = 0;

const movimiento = () => {
    if (parar <= 5) {
        izquierda += velocidad;
        colectivo.style.marginLeft = izquierda + "px";
        izquierda -= velocidad;
        setTimeout(regresar, 400);
        parar++;
    }
    else {
        reproducir();
        parar = 0;
        pasaje = 0;
    }

}

const regresar = () => {
    derecha -= velocidad;
    colectivo.style.marginLeft = derecha + "px";
    derecha += velocidad;
    setTimeout(movimiento, 400);
    iluminar();
    if (pasaje == 0) {
        reproducir();
        pasaje = 1;
    }

}

//--------------------------------------------------------JUGADORES PRUEBA---------------------------------------------------------------
/*
const jugadoresElegidos = [
    { nombre: "messi", numero: 10, puntos: document.querySelector(".ju-13").src},
    { nombre: "aguero", numero: 11, puntos: 90 },
    { nombre: "dibu", numero: 12, puntos: 95 },
    { nombre: "armani", numero: 1, puntos: 75 },
    { nombre: "otamendi", numero: 4, puntos: 90 },
    { nombre: "romero", numero: 3, puntos: 90 },
    { nombre: "floyth", numero: 2, puntos: 75 },
    { nombre: "acuna", numero: 8, puntos: 80 },
    { nombre: "correa", numero: 13, puntos: 70 },
    { nombre: "alvarez", numero: 14, puntos: 70 },
    { nombre: "correa1", numero: 7, puntos: 75 },
    { nombre: "depaul", numero: 5, puntos: 85 },
    { nombre: "tagliafico", numero: 6, puntos: 80 },
    { nombre: "molina", numero: 15, puntos: 75 },
    { nombre: "martinez", numero: 16, puntos: 85 },
    { nombre: "dimaria", numero: 9, puntos: 90 },
    { nombre: "dybala", numero: 17, puntos: 85 },
    { nombre: "gomez", numero: 18, puntos: 75 },
    { nombre: "rojo", numero: 19, puntos: 80 },
    { nombre: "locelso", numero: 20, puntos: 80 },
    { nombre: "paredes", numero: 21, puntos: 85 },
    { nombre: "montiel", numero: 22, puntos: 80 }
];

console.log(jugadoresElegidos[0].puntos);

const jugadorGuardado = (nom, num) => { localStorage.setItem(nom, num) };
jugadorGuardado("Jugadores ", JSON.stringify(jugadoresElegidos));*/
//console.log(jugadoresElegidos[0].puntos); (este seria messi por ejemplo)

/*
const dibu = () => {  document.querySelector(".ju-1");
let arquero1 = jugadoresElegidos[2];
console.log(arquero1);}*/


/*
const messi = (hola) => { let messi = jugadoresElegidos[0]; let jugDos = messi.puntos;
console.log(messi);*//*jug01.innerHTML = document.querySelector(".ju-1"); *//*
}


let entrenador = document.querySelector(".entrenador-sel");
const tecnico = () => {
}

*/
//let jug01 = document.querySelector(".jugador-seleccionado1");
/*
let totalPuntos = Number (document.querySelector(".total-p").value);
let puntosSumados = totalPuntos + totalPuntosSumados 
 function valorPoder (itemPuntos) {
     let total = Number(itemPuntos);
     let totalPuntaje = totalPuntos + total;
     console.log (totalPuntaje);
 }*/

//---------------------------------------------------TECNICO---------------------------------------------------------------------


let tecnicoUsuario = document.getElementById("tecnico-usuario");

function tecnico() {
    let nombreTecnico = prompt("HOLA, COMO TE LLAMAS?");
    while (nombreTecnico == "") {
        alert("POR FAVOR, INGRESE SU NOMBRE")
        nombreTecnico = prompt("HOLA, COMO TE LLAMAS?");
    }
    if (nombreTecnico != "") {
        alert("HOLA " + nombreTecnico + " SOS EL NUEVO INTEGRANTE DE LA SCALONETA")
        tecnicoUsuario.innerHTML = nombreTecnico;
    }
    swal("Bienvenido a la Scaloneta ", "Podras encender las luces de la Scaloneta, encender la musica o ¡¡¡PONERLA EN MARCHAA!!, tambien seleccionar a tus 5 jugadores preferidos..");
}
function messi() {
    swal("Buena elección!", "El mejor jugador del Mundo!!", "success");
}
function dibu() {
    swal("Buena elección!", "El mejor arquero del Mundo!!", "success");
}






