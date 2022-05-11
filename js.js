
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

const jugadoresElegidos = [
    { nombre: "messi", numero: 10,},
    { nombre: "aguero", numero: 11},
    { nombre: "dibu", numero: 12},
    { nombre: "armani", numero: 1},
    { nombre: "otamendi", numero: 4},
    { nombre: "romero", numero: 3},
    { nombre: "floyth", numero: 2},
    { nombre: "acuna", numero: 8},
    { nombre: "correa", numero: 13},
    { nombre: "alvarez", numero: 14},
    { nombre: "correa1", numero: 7},
    { nombre: "depaul", numero: 5},
    { nombre: "tagliafico", numero: 6},
    { nombre: "molina", numero: 15},
    { nombre: "martinez", numero: 16},
    { nombre: "dimaria", numero: 9},
    { nombre: "dybala", numero: 17},
    { nombre: "gomez", numero: 18},
    { nombre: "rojo", numero: 19},
    { nombre: "locelso", numero: 20},
    { nombre: "paredes", numero: 21},
    { nombre: "montiel", numero: 22}
];
const jugadorGuardado = (nom, num) => { localStorage.setItem(nom, num) };
jugadorGuardado("JUGADORES ", JSON.stringify(jugadoresElegidos));

let messias = jugadoresElegidos[0];
let dibuM = jugadoresElegidos[2];


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
    console.log(messias);
}
function dibu() {
    swal("Buena elección!", "El mejor arquero del Mundo!!", "success");
    console.log(dibuM);
}






