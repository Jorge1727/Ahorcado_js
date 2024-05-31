/**
 * "El value(palabra) del json lo convierte en array"
 * @param {*} pal 
 * @returns 
 */
function palabraToArray(pal){
        
    resultado = [];

    for(let i=0 ; i<5;i++){
        resultado.push(pal.value[i]); 
    }

    return resultado
}

/**
 * Muestra la imagen correspondiente del ahorcado
 * @param {*} vidas 
 */
function muestraImagen(vidas){

    imagenAhorcado.setAttribute("src", "./imgs/verdugo" + vidas +".png")
}

/**
 * Nos dice si ha ganado o perdido y deshabilita botones para evitar la continua indroduccion de datos del usuario
 * @param {*} acertadas 
 * @param {*} vida 
 */
function compruebaGanaPierde(acertadas, vida){
    if(acertadas == 5){
        imagenAhorcado.setAttribute("src", "./imgs/ganaste.png")
        imagenWoL.setAttribute("src", "./imgs/winner.jpg")
        boton.disabled = true;
        letraJugadorId.disabled = true;

    }

    if(vida == 0){
        boton.disabled = true;
        letraJugadorId.disabled = true;
        imagenWoL.setAttribute("src", "./imgs/loser.png")
    }
}
