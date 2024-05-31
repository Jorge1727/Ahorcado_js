//Declaraciones
const URL_PALABRAS = "http://localhost:3000/palabras";

let juegoMostrar = document.getElementById("juegoId")
let imagenAhorcado = document.getElementById("imgAhorcado")
let imagenWoL = document.getElementById("imgWoL")
let letraJugador;
reiniciaJuego.disabled = true;
salirId.disabled = true;

//Obtener datos del servidor
let palabras = []

function obtenerDatos(){
    fetch(URL_PALABRAS)
    .then( res => res.json())
    .then( datos => {
        palabras = datos
        console.log(datos)
    });
}
obtenerDatos();
console.log(palabras)


//Funciones Empezar, Reiniciar y salir del juego
function empezarJuego(){

    empiezaJuego.disabled = true;
    juegoMostrar.style.display = "block";
    reiniciaJuego.disabled = false;
    salirId.disabled = false

    play();
}

function reiniciarJuego(){
    juego = {
        palabra: "",
        acertadas: [],
        vida: 7
    };
    
    for(let i = 0; i <5 ;i++){
        posicionActual = document.getElementById("p"+(i+1));
        posicionActual.innerText =""
    }

    palabraArray;
    palabraArrayCpy;
    imagenAhorcado.setAttribute("src", "./imgs/verdugo7.png")
    imagenWoL.setAttribute("src", "");
    boton.disabled = false;
    letraJugadorId.disabled = false;

    play();
}

function salir(){
    reiniciarJuego();

    empiezaJuego.disabled = false;
    juegoMostrar.style.display = "none";
    reiniciaJuego.disabled = true;
    salirId.disabled = true;
}


//Lectura de letras enviadas por el usuario
function enviarPalabra(){
    letraJugador = document.getElementById("letraJugadorId").value.toUpperCase();
    document.getElementById("letraJugadorId").value = "";
    console.log(letraJugador);

    comprueba();
}

letraJugadorId.addEventListener("keydown", (evento) => {
    
    if (evento.key == "Enter") {
      letraJugador = document.getElementById("letraJugadorId").value.toUpperCase();
      document.getElementById("letraJugadorId").value = "";
      comprueba();
    }
    console.log(letraJugador);

});


//seteo del juego
let juego = {
    palabra: "",
    acertadas: [],
    vida: 7
};
let palabraArray;
let palabraArrayCpy;

//Nos prepara la nueva partida
function play(){

    juego.palabra = palabras[~~(Math.random() * palabras.length)]

    palabraArray = palabraToArray(juego.palabra)
    palabraArrayCpy = palabraArray.slice();
    palabraMostrar= new Array(palabraArray.length);

    console.log(palabraArray);

}

//Accion principal del juego
function comprueba(){
    acertoAlguna = false;

    if(!juego.acertadas.includes(letraJugador)){

        for(let i = 0; i <=5 ;i++){

            posicionActual = document.getElementById("p"+(i+1));
            console.log(posicionActual)

            if(palabraArrayCpy[i] == letraJugador){
                
                acertoAlguna = true;
                palabraArray.shift();
                juego.acertadas.push(letraJugador);
                console.log(juego.acertadas)
                posicionActual.append(letraJugador);
            }
        }
    }

    if(!acertoAlguna){
       juego.vida--;

       muestraImagen(juego.vida);
    }

    compruebaGanaPierde(juego.acertadas.length, juego.vida);
}


