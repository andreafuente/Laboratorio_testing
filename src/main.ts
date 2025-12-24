import {botonPedir,botonPlantarse,botonNuevaPartida,botonAdivina, handleAdivina,handlePedirCarta, handleNuevaPartida, handlePlantarse, resetJuego } from "./ui";

document.addEventListener("DOMContentLoaded", resetJuego); //cuando el contenido de la web se haya cargado, llama a la función resetJuego para iniciar el juego.

if (
  botonPedir !== null &&
  botonPedir !== undefined &&
  botonPedir instanceof HTMLButtonElement
) {
botonPedir.addEventListener("click", handlePedirCarta); 
}

if (
      botonPlantarse !== null &&
      botonPlantarse !== undefined &&
      botonPlantarse instanceof HTMLButtonElement ) {
  botonPlantarse.addEventListener("click", handlePlantarse); 
}

 if (
  botonNuevaPartida !== null &&
  botonNuevaPartida !== undefined &&
  botonNuevaPartida instanceof HTMLButtonElement
) {
  botonNuevaPartida.addEventListener("click", handleNuevaPartida); //añade un evento click al botón con id "nuevo" que llama a la función handleNuevaPartida cuando se hace clic.
}

   if (
  botonAdivina !== null &&
  botonAdivina !== undefined &&
  botonAdivina instanceof HTMLButtonElement
) {  

  botonAdivina.addEventListener("click", handleAdivina); //añade un evento click al botón con id "adivina" que llama a la función handleAdivina cuando se hace clic.
}
