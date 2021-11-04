let eleccionPlayer;
let eleccionMaquina;
const piedra=document.querySelector("#piedra");
const papel=document.querySelector("#papel");
const tijeras=document.querySelector("#tijeras");
const eleccionJugador=document.querySelector(".eleccionJugador")
const eleccionRival=document.querySelector(".eleccionRival")
let arrayMaquina=["piedra","papel","tijeras"]
const buttons = document.querySelectorAll('button');
let puntosJugador=0;
let puntosMaquina=0;
let jugadorTotal=document.querySelector(".jugadorTotal")
let maquinaTotal=document.querySelector(".maquinaTotal")
let tryAgain=document.querySelector(".tryAgain")
function eleccionPiedra(){
piedra.addEventListener("click",()=>{
    eleccionPlayer="piedra";
    eleccionMaquina= arrayMaquina[Math.floor(Math.random() * arrayMaquina.length)];
    eleccionJugador.textContent=eleccionPlayer;
    eleccionRival.textContent=eleccionMaquina;
    
    if(eleccionMaquina=="papel")
    {
        puntosMaquina+=1;
        maquinaTotal.textContent=puntosMaquina;
        

    }
    else if(eleccionMaquina=="tijeras")
    {
        puntosJugador+=1;
        jugadorTotal.textContent=puntosJugador; 
    }
    
});
}
eleccionPiedra();
function eleccionPapel(){
papel.addEventListener("click",()=>{
    eleccionPlayer="papel";
    eleccionMaquina= arrayMaquina[Math.floor(Math.random() * arrayMaquina.length)];
    eleccionJugador.textContent=eleccionPlayer;
    eleccionRival.textContent=eleccionMaquina;
    if(eleccionMaquina=="tijeras")
    {
        puntosMaquina+=1
        maquinaTotal.textContent=puntosMaquina
    }
    else if(eleccionMaquina=="piedra")
    {
        puntosJugador+=1
        jugadorTotal.textContent=puntosJugador
    }
});
}
eleccionPapel()
function eleccionTijeras(){
tijeras.addEventListener("click",()=>{
    eleccionPlayer="tijeras";
    eleccionMaquina= arrayMaquina[Math.floor(Math.random() * arrayMaquina.length)];
    eleccionJugador.textContent=eleccionPlayer;
    eleccionRival.textContent=eleccionMaquina;
   if(eleccionMaquina=="piedra")
    {
        puntosMaquina+=1
        maquinaTotal.textContent=puntosMaquina
        
    }
    else if(eleccionMaquina=="papel")
    {
        puntosJugador+=1
        jugadorTotal.textContent=puntosJugador
    }
});
}
eleccionTijeras()

function restartACero(){
    if(puntosJugador>=5 || puntosMaquina>=5)
    {
        puntosJugador=0
        jugadorTotal.textContent=puntosJugador
        puntosMaquina=0
        maquinaTotal.textContent=puntosMaquina
        document.getElementById("piedra").disabled = true;
        document.getElementById("papel").disabled = true;
        document.getElementById("tijeras").disabled = true;
        let crearBoton=document.createElement("button")
        tryAgain.appendChild(crearBoton)
        crearBoton.textContent="Try Again"
        crearBoton.className="botonTryAgain"
        

    }
    
    setTimeout(restartACero, 500);
}
restartACero();

function restablecerPagina(){
tryAgain.addEventListener("click",()=>{
    window.location.reload();
});
}
restablecerPagina();