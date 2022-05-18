let cadaSeleccion = document.querySelectorAll(".cada-seleccion");
let qatar = cadaSeleccion[0].innerText;
let ecuador = cadaSeleccion[1].innerText;
let senegal = cadaSeleccion[2].innerText;
let holanda = cadaSeleccion[3].innerText;
let inglaterra = cadaSeleccion[4].innerHTML;
let iran = cadaSeleccion[5].innerHTML;
let usa = cadaSeleccion[6].innerHTML;
let gEuropa = cadaSeleccion[7].innerHTML;
let argentina = cadaSeleccion[8].innerHTML;
let arabia = cadaSeleccion[9].innerHTML;
let mexico = cadaSeleccion[10].innerHTML;
let polonia = cadaSeleccion[11].innerHTML;
let francia = cadaSeleccion[12].innerHTML;
let pOff1 = cadaSeleccion[13].innerHTML;
let dinamarca = cadaSeleccion[14].innerHTML;
let tunez = cadaSeleccion[15].innerHTML;
let espana = cadaSeleccion[16].innerHTML;
let pOff2 = cadaSeleccion[17].innerHTML;
let alemania = cadaSeleccion[18].innerHTML;
let japon = cadaSeleccion[19].innerHTML;
let belgica = cadaSeleccion[20].innerHTML;
let canada = cadaSeleccion[21].innerHTML;
let marruecos = cadaSeleccion[22].innerHTML;
let croacia = cadaSeleccion[23].innerHTML;
let brasil = cadaSeleccion[24].innerHTML;
let serbia = cadaSeleccion[25].innerHTML;
let suiza = cadaSeleccion[26].innerHTML;
let camerun = cadaSeleccion[27].innerHTML;
let portugal = cadaSeleccion[28].innerHTML;
let ghana = cadaSeleccion[29].innerHTML;
let uruguay = cadaSeleccion[30].innerHTML;
let corea = cadaSeleccion[31].innerHTML;


//---------------------------------------------------------------------------------------------------------------------------------------------

let partidos = document.querySelectorAll(".texto-grupos");
let equipo1 = partidos[0];
let equipo2 = partidos[1];
let equipo3 = partidos[2];
let equipo4 = partidos[3];
let equipo5 = partidos[4];
let equipo6 = partidos[5];
let equipo7 = partidos[6];
let equipo8 = partidos[7];
let equipo9 = partidos[8];
let equipo10 = partidos[9];
let equipo11 = partidos[10];
let equipo12 = partidos[11];
let equipo13 = partidos[12];
let equipo14 = partidos[13];
let equipo15 = partidos[14];
let equipo16 = partidos[15];

//-----------------------------------------------------------------------------------------------------------------------------------------------
/*function ganadorArg () {
    equipo1.innerHTML = argentina;
    cuartos();
}
 function cuartos () {
     console.log(equipo1.innerHTML);
 }*/
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
    if(posicionNum1.value==1) {
        equipo1.innerHTML = qatar;
    }
    else if(posicionNum1.value==2) {
        equipo5.innerHTML = qatar;
    }
    if(posicionNum2.value==1) {
        equipo1.innerHTML = ecuador;
    }
    else if(posicionNum2.value==2) {
        equipo5.innerHTML = ecuador;
    }
    if(posicionNum3.value==1) {
        equipo1.innerHTML = senegal;
    }
    else if(posicionNum3.value==2) {
        equipo5.innerHTML = senegal;
    }
    if(posicionNum4.value==1) {
        equipo1.innerHTML = holanda;
    }
    else if(posicionNum4.value==2) {
        equipo5.innerHTML = holanda;
    }
    //---------------------------GRUPO B------------------------------------------------------------
    if(posicionNum5.value==1) {
        equipo2.innerHTML = inglaterra;
    }
    else if(posicionNum5.value==2) {
        equipo6.innerHTML = inglaterra;
    }
    if(posicionNum6.value==1) {
        equipo2.innerHTML = iran;
    }
    else if(posicionNum6.value==2) {
        equipo6.innerHTML = iran;
    }
    if(posicionNum7.value==1) {
        equipo2.innerHTML = usa;
    }
    else if(posicionNum7.value==2) {
        equipo6.innerHTML = usa;
    }
    if(posicionNum8.value==1) {
        equipo2.innerHTML = gEuropa;
    }
    else if(posicionNum8.value==2) {
        equipo6.innerHTML = gEuropa;
    }
    //-----------------------GRUPO C-----------------------------------------------------------------
    if(posicionNum9.value==1) {
        equipo3.innerHTML = argentina;
    }
    else if(posicionNum9.value==2) {
        equipo7.innerHTML = argentina;
    }
    if(posicionNum10.value==1) {
        equipo3.innerHTML = arabia;
    }
    else if(posicionNum10.value==2) {
        equipo7.innerHTML = arabia;
    }
    if(posicionNum11.value==1) {
        equipo3.innerHTML = mexico;
    }
    else if(posicionNum11.value==2) {
        equipo7.innerHTML = mexico;
    }
    if(posicionNum12.value==1) {
        equipo3.innerHTML = polonia;
    }
    else if(posicionNum12.value==2) {
        equipo7.innerHTML = polonia;
    }
    //------------------------------------GRUPO D--------------------------------------------------------
    if(posicionNum13.value==1) {
        equipo4.innerHTML = francia;
    }
    else if(posicionNum13.value==2) {
        equipo8.innerHTML = francia;
    }
    if(posicionNum14.value==1) {
        equipo4.innerHTML = pOff1;
    }
    else if(posicionNum14.value==2) {
        equipo8.innerHTML = pOff1;
    }
    if(posicionNum15.value==1) {
        equipo4.innerHTML = dinamarca;
    }
    else if(posicionNum15.value==2) {
        equipo8.innerHTML = dinamarca;
    }
    if(posicionNum16.value==1) {
        equipo4.innerHTML = tunez;
    }
    else if(posicionNum16.value==2) {
        equipo8.innerHTML = tunez;
    }
    //---------------------------------------GRUPO E------------------------------------------------------------------------
    if(posicionNum17.value==1) {
        equipo9.innerHTML = espana;
    }
    else if(posicionNum17.value==2) {
        equipo13.innerHTML = espana;
    }
    if(posicionNum18.value==1) {
        equipo9.innerHTML = pOff2;
    }
    else if(posicionNum18.value==2) {
        equipo13.innerHTML = pOff2;
    }
    if(posicionNum19.value==1) {
        equipo9.innerHTML = alemania;
    }
    else if(posicionNum19.value==2) {
        equipo13.innerHTML = alemania;
    }
    if(posicionNum20.value==1) {
        equipo9.innerHTML = japon;
    }
    else if(posicionNum20.value==2) {
        equipo13.innerHTML = japon;
    } 
    //--------------------------------------GRUPO F-------------------------------------------------------------------------
    if(posicionNum21.value==1) {
        equipo10.innerHTML = belgica;
    }
    else if(posicionNum21.value==2) {
        equipo14.innerHTML = belgica;
    }
    if(posicionNum22.value==1) {
        equipo10.innerHTML = canada;
    }
    else if(posicionNum22.value==2) {
        equipo14.innerHTML = canada;
    }
    if(posicionNum23.value==1) {
        equipo10.innerHTML = marruecos;
    }
    else if(posicionNum23.value==2) {
        equipo14.innerHTML = marruecos;
    }
    if(posicionNum24.value==1) {
        equipo10.innerHTML = croacia;
    }
    else if(posicionNum24.value==2) {
        equipo14.innerHTML = croacia;
    }
    //-------------------------------------GRUPO G--------------------------------------------------------------------------
    if(posicionNum25.value==1) {
        equipo11.innerHTML = brasil;
    }
    else if(posicionNum25.value==2) {
        equipo15.innerHTML = brasil;
    }
    if(posicionNum26.value==1) {
        equipo11.innerHTML = serbia;
    }
    else if(posicionNum26.value==2) {
        equipo15.innerHTML = serbia;
    }
    if(posicionNum27.value==1) {
        equipo11.innerHTML = suiza;
    }
    else if(posicionNum27.value==2) {
        equipo15.innerHTML = suiza;
    }
    if(posicionNum28.value==1) {
        equipo11.innerHTML = camerun;
    }
    else if(posicionNum28.value==2) {
        equipo15.innerHTML = camerun;
    }
    //----------------------------------------GRUPO H---------------------------------------------------------------------
    if(posicionNum29.value==1) {
        equipo12.innerHTML = portugal;
    }
    else if(posicionNum29.value==2) {
        equipo16.innerHTML = portugal;
    }
    if(posicionNum30.value==1) {
        equipo12.innerHTML = ghana;
    }
    else if(posicionNum30.value==2) {
        equipo16.innerHTML = ghana;
    }
    if(posicionNum31.value==1) {
        equipo12.innerHTML = uruguay;
    }
    else if(posicionNum31.value==2) {
        equipo16.innerHTML = uruguay;
    }
    if(posicionNum32.value==1) {
        equipo12.innerHTML = corea;
    }
    else if(posicionNum32.value==2) {
        equipo16.innerHTML = corea;
    }
    //--------------------------------SEGUNDA FASE------------------------------------------------------------------
  
 }

 function clasificacionCuartos () {
     let resultados = equipo2.innerHTML.value
     console.log(resultados);
   /* if (
        equipo1.innerHTML!=""
    ) {
        
    }*/
 }


