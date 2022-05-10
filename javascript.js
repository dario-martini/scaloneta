
const divJugadores = document.querySelector(".jugador-seleccionado1")

const seleccionar = document.querySelectorAll(".jugador");
seleccionar.forEach((agregarJug) => {

    agregarJug.addEventListener('click', agregado);
}
);
function agregado(event) {
    const boton = event.target;
    const item = boton.closest(".jugador");
    const itemPuntos = [item.querySelector(".puntajes").innerHTML];
    const itemImagen = item.querySelector(".ficha-jugador").src;
    itemImagenes(itemImagen, itemPuntos);
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
    `
    cajaJugJs.innerHTML = contenidoJug;
    divJugadores.append(cajaJugJs);

    //valorPoder(itemPuntos);

}


/*
function valorPoder(itemPuntos) {
    for (i = 0 ; i<5 ; i++) {
        const array1 = Number(itemPuntos);
const initialValue = 0;
const puntosSumados = array1 + initialValue;

console.log(puntosSumados);

totalPoder.innerHTML = puntosSumados;
    }
    
    
}
const totalPoder = document.querySelector(".total-p");

*/
//---------------------------------------------------BANDERAS--------------------------------------------------------------------------

//const nombrePaises = document.querySelectorAll(".input-seleccion").value;
let seleccionesNombre0 = document.getElementById("selecciones-nombre0");
let seleccionesNombre1 = document.getElementById("selecciones-nombre1");
let seleccionesNombre2 = document.getElementById("selecciones-nombre2");
let seleccionesNombre3 = document.getElementById("selecciones-nombre3");
let seleccionesNombre4 = document.getElementById("selecciones-nombre4");
let seleccionesNombre5 = document.getElementById("selecciones-nombre5");
let seleccionesNombre6 = document.getElementById("selecciones-nombre6");
let seleccionesNombre7 = document.getElementById("selecciones-nombre7");
let seleccionesNombre8 = document.getElementById("selecciones-nombre8");
let seleccionesNombre9 = document.getElementById("selecciones-nombre9");

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
    seleccionesNombre0.innerHTML = datosIngresados.bandera0;
    seleccionesNombre1.innerHTML = datosIngresados.bandera1;
    seleccionesNombre2.innerHTML = datosIngresados.bandera2;
    seleccionesNombre3.innerHTML = datosIngresados.bandera3;
    seleccionesNombre4.innerHTML = datosIngresados.bandera4;
    seleccionesNombre5.innerHTML = datosIngresados.bandera5;
    seleccionesNombre6.innerHTML = datosIngresados.bandera6;
    seleccionesNombre7.innerHTML = datosIngresados.bandera7;
    seleccionesNombre8.innerHTML = datosIngresados.bandera8;
    seleccionesNombre9.innerHTML = datosIngresados.bandera9;

}
let datosEnviados = [];
function pintar() {
    datosEnviados.push(datosIngresados);
    ingresado();
}
function ingresado() {
    let nombreIngresado = datosIngresados;
    if (nombreIngresado.bandera0 == "Portugal",
        nombreIngresado.bandera1 == "Alemania",
        nombreIngresado.bandera2 == "Brasil",
        nombreIngresado.bandera3 == "Egipto",
        nombreIngresado.bandera4 == "Francia",
        nombreIngresado.bandera5 == "Japon",
        nombreIngresado.bandera6 == "Panama",
        nombreIngresado.bandera7 == "Senegal",
        nombreIngresado.bandera8 == "Suecia",
        nombreIngresado.bandera9 == "Uruguay"
    ) {
        resultadoBanderas = "si";
    }
    agregar();
}
let resultadoBanderas = [];

function agregar() {
    if (resultadoBanderas == "si") {
        swal("Buen Trabajo", "sigue asi!", "success");
    }
    else {
        swal("Uuupss", "Controla bien las respuestas", "error");
    }
}
function reglas() {
    swal({
        title: "Estas listo/a???",
        text: "Vamos a poner a prueba tus conocimientos",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Debes escribir a que pais pertenece cada bandera debajo de cada una de ellas, la primera letra en mayuscula y sin acentos! BUENA SUERTE!!", {
                    icon: "success",
                });
            } else {
                swal("Deberas esforzarte mas para estar en la Scaloneta");
            }
        });
}
