
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
//console.log (colectivo);
//for (i=0; i==10; i++);
//let barraBrava = 0;
let pasaje = 0;
let parar = 0;

const movimiento = () => {
    if (parar<=15) {
        izquierda += velocidad;
        colectivo.style.marginLeft = izquierda + "px";
        izquierda -= velocidad;
        setTimeout(regresar, 400);
        parar++;
    }
    else{
        reproducir();
        parar=0;
        pasaje=0;
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

/*
const scaloneta = () => {
    barraBrava++
    console.log(barraBrava);
    if (barraBrava <= 2) {
        movimiento();
        }
        if (barraBrava >=2) {
            return

        }
        
 }*/
 //--------------------------------------------------------JUGADORES---------------------------------------------------------------------