let cadaSeleccion = document.querySelectorAll(".cada-seleccion");
let qatar = cadaSeleccion[0].innerText;
let ecuador = cadaSeleccion[1].innerText;
let senegal = cadaSeleccion[2].innerText;
let holanda = cadaSeleccion[3].innerText;
let inglaterra = cadaSeleccion[4].innerText;
let iran = cadaSeleccion[5].innerText;
let usa = cadaSeleccion[6].innerText;
let gEuropa = cadaSeleccion[7].innerText;
let argentina = cadaSeleccion[8].innerText;
let arabia = cadaSeleccion[9].innerText;
let mexico = cadaSeleccion[10].innerText;
let polonia = cadaSeleccion[11].innerText;
let francia = cadaSeleccion[12].innerText;
let pOff1 = cadaSeleccion[13].innerText;
let dinamarca = cadaSeleccion[14].innerText;
let tunez = cadaSeleccion[15].innerText;
let espana = cadaSeleccion[16].innerText;
let pOff2 = cadaSeleccion[17].innerText;
let alemania = cadaSeleccion[18].innerText;
let japon = cadaSeleccion[19].innerText;
let belgica = cadaSeleccion[20].innerText;
let canada = cadaSeleccion[21].innerText;
let marruecos = cadaSeleccion[22].innerText;
let croacia = cadaSeleccion[23].innerText;
let brasil = cadaSeleccion[24].innerText;
let serbia = cadaSeleccion[25].innerText;
let suiza = cadaSeleccion[26].innerText;
let camerun = cadaSeleccion[27].innerText;
let portugal = cadaSeleccion[28].innerText;
let ghana = cadaSeleccion[29].innerText;
let uruguay = cadaSeleccion[30].innerText;
let corea = cadaSeleccion[31].innerText;


//---------------------------------------------------------------------------------------------------------------------------------------------

let partidos = document.querySelectorAll(".texto-grupos");

let posicionNum1 = document.querySelector(".a");
let posicionNum2 = document.querySelector(".b");
let posicionNum3 = document.querySelector(".c");
let posicionNum4 = document.querySelector(".c1");
let posicionNum5 = document.querySelector(".d");
let posicionNum6 = document.querySelector(".e");
let posicionNum7 = document.querySelector(".f");
let posicionNum8 = document.querySelector(".g");
let posicionNum9 = document.querySelector(".h");
let posicionNum10 = document.querySelector(".i");
let posicionNum11 = document.querySelector(".j");
let posicionNum12 = document.querySelector(".k");
let posicionNum13 = document.querySelector(".l");
let posicionNum14 = document.querySelector(".m");
let posicionNum15 = document.querySelector(".n");
let posicionNum16 = document.querySelector(".o");
let posicionNum17 = document.querySelector(".p");
let posicionNum18 = document.querySelector(".q");
let posicionNum19 = document.querySelector(".r");
let posicionNum20 = document.querySelector(".s");
let posicionNum21 = document.querySelector(".t");
let posicionNum22 = document.querySelector(".u");
let posicionNum23 = document.querySelector(".v");
let posicionNum24 = document.querySelector(".w");
let posicionNum25 = document.querySelector(".x");
let posicionNum26 = document.querySelector(".y");
let posicionNum27 = document.querySelector(".z");
let posicionNum28 = document.querySelector(".za");
let posicionNum29 = document.querySelector(".zb");
let posicionNum30 = document.querySelector(".zc");
let posicionNum31 = document.querySelector(".zd");
let posicionNum32 = document.querySelector(".ze");

function posicionarGrupos() {
    //---------------------------GRUPO A --------------------------------------------------------
    posicionNum1.value == 1 ? partidos[0].innerHTML = qatar : false;
    posicionNum1.value == 2 ? partidos[4].innerHTML = qatar : false;
    posicionNum2.value == 1 ? partidos[0].innerHTML = ecuador : false;
    posicionNum2.value == 2 ? partidos[4].innerHTML = ecuador : false;
    posicionNum3.value == 1 ? partidos[0].innerHTML = senegal : false;
    posicionNum3.value == 2 ? partidos[4].innerHTML = senegal : false;
    posicionNum4.value == 1 ? partidos[0].innerHTML = holanda : false;
    posicionNum4.value == 2 ? partidos[4].innerHTML = holanda : false;

    //---------------------------GRUPO B------------------------------------------------------------
    posicionNum5.value == 1 ? partidos[1].innerHTML = inglaterra : false;
    posicionNum5.value == 2 ? partidos[5].innerHTML = inglaterra : false;
    posicionNum6.value == 1 ? partidos[1].innerHTML = iran : false;
    posicionNum6.value == 2 ? partidos[5].innerHTML = iran : false;
    posicionNum7.value == 1 ? partidos[1].innerHTML = usa : false;
    posicionNum7.value == 2 ? partidos[5].innerHTML = usa : false;
    posicionNum8.value == 1 ? partidos[1].innerHTML = gEuropa : false;
    posicionNum8.value == 2 ? partidos[5].innerHTML = gEuropa : false;

    //-----------------------GRUPO C-----------------------------------------------------------------
    posicionNum9.value == 1 ? partidos[2].innerHTML = argentina : false;
    posicionNum9.value == 2 ? partidos[6].innerHTML = argentina : false;
    posicionNum10.value == 1 ? partidos[2].innerHTML = arabia : false;
    posicionNum10.value == 2 ? partidos[6].innerHTML = arabia : false;
    posicionNum11.value == 1 ? partidos[2].innerHTML = mexico : false;
    posicionNum11.value == 2 ? partidos[6].innerHTML = mexico : false;
    posicionNum12.value == 1 ? partidos[2].innerHTML = polonia : false;
    posicionNum12.value == 2 ? partidos[6].innerHTML = polonia : false;

    //------------------------------------GRUPO D----------------------------------------------------------------------
    posicionNum13.value == 1 ? partidos[3].innerHTML = francia : false;
    posicionNum13.value == 2 ? partidos[7].innerHTML = francia : false;
    posicionNum14.value == 1 ? partidos[3].innerHTML = pOff1 : false;
    posicionNum14.value == 2 ? partidos[7].innerHTML = pOff1 : false;
    posicionNum15.value == 1 ? partidos[3].innerHTML = dinamarca : false;
    posicionNum15.value == 2 ? partidos[7].innerHTML = dinamarca : false;
    posicionNum16.value == 1 ? partidos[3].innerHTML = tunez : false;
    posicionNum16.value == 2 ? partidos[7].innerHTML = tunez : false;

    //---------------------------------------GRUPO E------------------------------------------------------------------------
    posicionNum17.value == 1 ? partidos[8].innerHTML = espana : false;
    posicionNum17.value == 2 ? partidos[12].innerHTML = espana : false;
    posicionNum18.value == 1 ? partidos[8].innerHTML = pOff2 : false;
    posicionNum18.value == 2 ? partidos[12].innerHTML = pOff2 : false;
    posicionNum19.value == 1 ? partidos[8].innerHTML = alemania : false;
    posicionNum19.value == 2 ? partidos[12].innerHTML = alemania : false;
    posicionNum20.value == 1 ? partidos[8].innerHTML = japon : false;
    posicionNum20.value == 2 ? partidos[12].innerHTML = japon : false;

    //--------------------------------------GRUPO F-------------------------------------------------------------------------
    posicionNum21.value == 1 ? partidos[9].innerHTML = belgica : false;
    posicionNum21.value == 2 ? partidos[13].innerHTML = belgica : false;
    posicionNum22.value == 1 ? partidos[9].innerHTML = canada : false;
    posicionNum22.value == 2 ? partidos[13].innerHTML = canada : false;
    posicionNum23.value == 1 ? partidos[9].innerHTML = marruecos : false;
    posicionNum23.value == 2 ? partidos[13].innerHTML = marruecos : false;
    posicionNum24.value == 1 ? partidos[9].innerHTML = croacia : false;
    posicionNum24.value == 2 ? partidos[13].innerHTML = croacia : false;

    //-------------------------------------GRUPO G--------------------------------------------------------------------------
    posicionNum25.value == 1 ? partidos[10].innerHTML = brasil : false;
    posicionNum25.value == 2 ? partidos[14].innerHTML = brasil : false;
    posicionNum26.value == 1 ? partidos[10].innerHTML = serbia : false;
    posicionNum26.value == 2 ? partidos[14].innerHTML = serbia : false;
    posicionNum27.value == 1 ? partidos[10].innerHTML = suiza : false;
    posicionNum27.value == 2 ? partidos[14].innerHTML = suiza : false;
    posicionNum28.value == 1 ? partidos[10].innerHTML = camerun : false;
    posicionNum28.value == 2 ? partidos[14].innerHTML = camerun : false;

    //----------------------------------------GRUPO H----------------------------------------------------------------------
    posicionNum29.value == 1 ? partidos[11].innerHTML = portugal : false;
    posicionNum29.value == 2 ? partidos[15].innerHTML = portugal : false;
    posicionNum30.value == 1 ? partidos[11].innerHTML = ghana : false;
    posicionNum30.value == 2 ? partidos[15].innerHTML = ghana : false;
    posicionNum31.value == 1 ? partidos[11].innerHTML = uruguay : false;
    posicionNum31.value == 2 ? partidos[15].innerHTML = uruguay : false;
    posicionNum32.value == 1 ? partidos[11].innerHTML = corea : false;
    posicionNum32.value == 2 ? partidos[15].innerHTML = corea : false;

    //---------------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------------
    //--------------------------------SEGUNDA FASE------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------
}

let segundaFase = document.querySelectorAll(".texto-cuartos");

const clasificacionCuartos1 = () => { segundaFase[0].innerHTML = partidos[0].innerText; }
const clasificacionCuartos2 = () => { segundaFase[0].innerHTML = partidos[1].innerText; }
const clasificacionCuartos3 = () => { segundaFase[1].innerHTML = partidos[2].innerText; }
const clasificacionCuartos4 = () => { segundaFase[1].innerHTML = partidos[3].innerText; }
const clasificacionCuartos5 = () => { segundaFase[2].innerHTML = partidos[4].innerText; }
const clasificacionCuartos6 = () => { segundaFase[2].innerHTML = partidos[5].innerText; }
const clasificacionCuartos7 = () => { segundaFase[3].innerHTML = partidos[6].innerText; }
const clasificacionCuartos8 = () => { segundaFase[3].innerHTML = partidos[7].innerText; }
const clasificacionCuartos9 = () => { segundaFase[4].innerHTML = partidos[8].innerText; }
const clasificacionCuartos10 = () => { segundaFase[4].innerHTML = partidos[9].innerText; }
const clasificacionCuartos11 = () => { segundaFase[5].innerHTML = partidos[10].innerText; }
const clasificacionCuartos12 = () => { segundaFase[5].innerHTML = partidos[11].innerText; }
const clasificacionCuartos13 = () => { segundaFase[6].innerHTML = partidos[12].innerText; }
const clasificacionCuartos14 = () => { segundaFase[6].innerHTML = partidos[13].innerText; }
const clasificacionCuartos15 = () => { segundaFase[7].innerHTML = partidos[14].innerText; }
const clasificacionCuartos16 = () => { segundaFase[7].innerHTML = partidos[15].innerText; }

//-------------------------------------TERCERA FASE---------------------------------------------------------------------

let semiFinales = document.querySelectorAll(".texto-semi");

const semis1 = () => { semiFinales[0].innerHTML = segundaFase[0].innerText; }
const semis2 = () => { semiFinales[0].innerHTML = segundaFase[1].innerText; }
const semis3 = () => { semiFinales[1].innerHTML = segundaFase[2].innerText; }
const semis4 = () => { semiFinales[1].innerHTML = segundaFase[3].innerText; }
const semis5 = () => { semiFinales[2].innerHTML = segundaFase[4].innerText; }
const semis6 = () => { semiFinales[2].innerHTML = segundaFase[5].innerText; }
const semis7 = () => { semiFinales[3].innerHTML = segundaFase[6].innerText; }
const semis8 = () => { semiFinales[3].innerHTML = segundaFase[7].innerText; }

//------------------------------------------SEMIFINAL------------------------------------------------------------------
let puestoFinal1 = document.querySelector(".finalista1");
let puestoFinal2 = document.querySelector(".finalista2");
let puestoTercero1 = document.querySelector(".tercero1");
let puestoTercero2 = document.querySelector(".tercero2");
let resultadoSemi = document.querySelectorAll(".input-semi");

function clasificacionSemi() {
    let semifinalista1 = Number(resultadoSemi[0].value);
    let semifinalista2 = Number(resultadoSemi[1].value);
    let semifinalista3 = Number(resultadoSemi[2].value);
    let semifinalista4 = Number(resultadoSemi[3].value);
    semifinalista1 > semifinalista2 ? puestoFinal1.innerHTML = semiFinales[0].innerText : puestoTercero1.innerHTML = semiFinales[0].innerText;
    semifinalista1 < semifinalista2 ? puestoFinal1.innerHTML = semiFinales[1].innerText : puestoTercero1.innerHTML = semiFinales[1].innerText;
    semifinalista3 > semifinalista4 ? puestoFinal2.innerHTML = semiFinales[2].innerText : puestoTercero2.innerHTML = semiFinales[2].innerText;
    semifinalista3 < semifinalista4 ? puestoFinal2.innerHTML = semiFinales[3].innerText : puestoTercero2.innerHTML = semiFinales[3].innerText;
    semifinalista1 == semifinalista2 && alert("El partido no puede terminar en empate"); 
    semifinalista3 == semifinalista4 && alert("El partido no puede terminar en empate");
}
