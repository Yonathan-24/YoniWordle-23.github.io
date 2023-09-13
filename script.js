let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH', 'PEAKS']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)]
let intentos = 6; 
const input = document.getElementById("guess-input");
const valor = input.value;
console.log (palabra);
const button = document.getElementById ("guess-button");
button.addEventListener("click", intentar);
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
    function intentar(){
        const INTENTO = leerIntento();
        if (INTENTO === palabra ) {
            terminar("<h1>GANASTES</h1>")
            return
        }
        for (let i in palabra){
            if (INTENTO[i]===palabra[i]){
                console.log(INTENTO[i], "VERDE")
            } else if( palabra.includes(INTENTO[i]) ) {
                console.log(INTENTO[i], "AMARILLO")
            } else {
                console.log(INTENTO[i], "GRIS")
            }
        }
            intentos--
        if (intentos==0){
            terminar("<h1>PERDISTE</h1>")
        }
    }
function terminar(mensaje){
    const INPUT = document.getElementById("mensaje").innerHTML = mensaje;
}
function muestraIntento (){
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    }

