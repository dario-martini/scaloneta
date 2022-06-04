
const divJugadores = document.querySelector(".jugador-seleccionado1")
let i = 0;
let total = 0;
const seleccionar = document.querySelectorAll(".jugador");
let totalDiv = document.querySelector(".total-p")

seleccionar.forEach((agregarJug) => {
    agregarJug.addEventListener('click', agregado);
}
);
function agregado(event) {
    if (i<=4) {
        const boton = event.target;
    const item = boton.closest(".jugador");
    const itemPuntos = Number(item.querySelector(".puntajes").innerText);
    const itemImagen = item.querySelector(".ficha-jugador").src;
    itemImagenes(itemImagen, itemPuntos);
    }
    else {
        alert("la lista esta completa")
    }
}
function itemImagenes(itemImagen, itemPuntos) {
    const cajaJugJs = document.createElement('div')
    const contenidoJug =
        `
    <div class="lista">
            <div class="jugadores--js">
                <img src=${itemImagen}>
            </div>
        </div>
    `;
    cajaJugJs.innerHTML = contenidoJug;
    divJugadores.append(cajaJugJs);
    
    i++;
    total += itemPuntos;
     totalDiv.innerHTML = total;
}
function armar5() {
    if (i==5) {
        if (total == 500 ) {
        swal("Excelente", "Tienes el equipo perfecto", "success");
    }
    else if (total>=460 && total<500) {
        swal("Muy Bien", "Tienes un gran equipo", "success");
    }
    else {
        swal("Brasil te hace 10", "Estas fuera del torneo", "error");
    }
    }
    else{
        alert("Debes elegir a todos tus jugadores")
    }
    
}
 



//---------------------------------------------------BANDERAS--------------------------------------------------------------------------

let seleccionesNombre0 = document.getElementById("selecciones-nombre0");
let seleccionesNombre1 = document.getElementById("selecciones-nombre2");
let seleccionesNombre2 = document.getElementById("selecciones-nombre4");
let seleccionesNombre3 = document.getElementById("selecciones-nombre6");
let seleccionesNombre4 = document.getElementById("selecciones-nombre8");
let seleccionesNombre5 = document.getElementById("selecciones-nombre1");
let seleccionesNombre6 = document.getElementById("selecciones-nombre3");
let seleccionesNombre7 = document.getElementById("selecciones-nombre5");
let seleccionesNombre8 = document.getElementById("selecciones-nombre7");
let seleccionesNombre9 = document.getElementById("selecciones-nombre9");

const divApintar = document.querySelectorAll(".check")
divApintar.forEach((pintarbandera) => {
    pintarbandera.addEventListener('click', banderas);
}
);
let resul;

function banderas() {
    function banderasNombres(pais0, pais1, pais2, pais3, pais4, pais5, pais6, pais7, pais8, pais9) {
        this.bandera0 = pais0;
        this.bandera1 = pais1;
        this.bandera2 = pais2;
        this.bandera3 = pais3;
        this.bandera4 = pais4;
        this.bandera5 = pais5;
        this.bandera6 = pais6;
        this.bandera7 = pais7;
        this.bandera8 = pais8;
        this.bandera9 = pais9;
    }
    let pais0 = document.getElementById("band0").value;
    let pais1 = document.getElementById("band1").value;
    let pais2 = document.getElementById("band2").value;
    let pais3 = document.getElementById("band3").value;
    let pais4 = document.getElementById("band4").value;
    let pais5 = document.getElementById("band5").value;
    let pais6 = document.getElementById("band6").value;
    let pais7 = document.getElementById("band7").value;
    let pais8 = document.getElementById("band8").value;
    let pais9 = document.getElementById("band9").value;


    datosIngresados = new banderasNombres(
        pais0, pais1, pais2, pais3, pais4, pais5, pais6, pais7, pais8, pais9
    );
    pintar();
    pais0=="Portugal"||pais0=="portugal" ? (seleccionesNombre0.innerHTML = datosIngresados.bandera0 + " ✓", resul=true) : resul=false ;
    pais1=="alemania"||pais1=="Alemania" ? (seleccionesNombre1.innerHTML = datosIngresados.bandera1 + " ✓", resul=true): resul=false;
    pais2=="brasil"||pais2=="Brasil" ? (seleccionesNombre2.innerHTML = datosIngresados.bandera2 + " ✓", resul=true): resul=false;
    pais3=="egipto"||pais3=="Egipto" ? (seleccionesNombre3.innerHTML = datosIngresados.bandera3 + " ✓", resul=true): resul=false;
    pais4=="francia"||pais4=="Francia" ? (seleccionesNombre4.innerHTML = datosIngresados.bandera4 + " ✓", resul=true): resul=false;
    pais5=="japon"||pais5=="Japon" ? (seleccionesNombre5.innerHTML = datosIngresados.bandera5 + " ✓", resul=true): resul=false;
    pais6=="panama"||pais6=="Panama" ? (seleccionesNombre6.innerHTML = datosIngresados.bandera6 + " ✓", resul=true): resul=false;
    pais7=="senegal"||pais7=="Senegal" ? (seleccionesNombre7.innerHTML = datosIngresados.bandera7 + " ✓", resul=true): resul=false;
    pais8=="suecia"||pais8=="Suecia" ? (seleccionesNombre8.innerHTML = datosIngresados.bandera8 + " ✓", resul=true): resul=false;
    pais9=="uruguay"||pais9=="Uruguay" ? (seleccionesNombre9.innerHTML = datosIngresados.bandera9 + " ✓", resul=true): resul=false;
    resul==true ? swal("Muy Bien!", "Sabes mucho de banderas!!", "success"):false;
}
let datosEnviados = [];

function pintar() {
    datosEnviados.push(datosIngresados);
}



