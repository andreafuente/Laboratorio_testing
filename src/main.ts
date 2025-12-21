import {cartaBocaAbajo, puntosMaximos} from "./model"; //importa los elementos Carta, puntosMaximos y cartaBocaAbajo desde el archivo model.ts
import { dameCarta,gameOver, mensajeAdivina, mensajeGameOver, estadoMensaje } from "./motor"; //importa la función dameCarta desde el archivo motor.ts
import {botonPedir,botonPlantarse,botonNuevaPartida,botonAdivina,bloquearBoton,escribirMensaje,mostrarCarta,mostrarPuntuacion} from "./ui";

export let puntos: number = 0; //variable global que guarda los puntos actuales del jugador

const resetJuego = (): void => {
  if (
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement &&
    botonPedir !== null &&
    botonPedir !== undefined &&
    botonPedir instanceof HTMLButtonElement && botonAdivina !== null &&
    botonAdivina !== undefined &&
    botonAdivina instanceof HTMLButtonElement
  ) {
    bloquearBoton(botonPlantarse, false); //Habilita el botón para que se pueda plantar.
    bloquearBoton(botonPedir, false); //Habilita el botón para que se puedan pedir cartas.
    bloquearBoton(botonAdivina, false); //Habilita el botón para que se pueda adivinar.
  }

  puntos = 0;
  mostrarPuntuacion(puntos);
  mostrarCarta(cartaBocaAbajo);
  escribirMensaje("");
};

document.addEventListener("DOMContentLoaded", resetJuego); //cuando el contenido de laweb se haya cargado, llama a la función resetJuego para iniciar el juego.

if (
  botonNuevaPartida !== null &&
  botonNuevaPartida !== undefined &&
  botonNuevaPartida instanceof HTMLButtonElement
) {
  const handleNuevaPartida = () => {
    resetJuego(); //llama a la función resetJuego para reiniciar el juego.
  };

  botonNuevaPartida.addEventListener("click", handleNuevaPartida); //añade un evento click al botón con id "nuevo" que llama a la función handleNuevaPartida cuando se hace clic.
}

const partidaFinalizada = (): void => {
    escribirMensaje(mensajeGameOver()); //pinta el mensaje en el elemento.
  
if (
    botonPedir !== null &&
    botonPedir !== undefined &&
    botonPedir instanceof HTMLButtonElement &&
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement &&
    botonAdivina !== null &&
    botonAdivina !== undefined &&
    botonAdivina instanceof HTMLButtonElement
  ) {
    bloquearBoton(botonPedir, true); //desactiva el botón para que no se pueda seguir pidiendo cartas.
    bloquearBoton(botonPlantarse, true); //desactiva el botón para que no se pueda seguir plantando.
    bloquearBoton(botonAdivina, true); //desactiva el botón para que no se pueda seguir adivinando.
  }
};


if (
  botonPedir !== null &&
  botonPedir !== undefined &&
  botonPedir instanceof HTMLButtonElement&&
  botonAdivina !== null &&
  botonAdivina !== undefined &&
  botonAdivina instanceof HTMLButtonElement
) {

  const handlePedirCarta = () => {
    if (puntos > puntosMaximos) return;//si los puntos actuales son mayores o iguales a 7.5, no hace nada.
    if(puntos === 0) {
      if (
  botonAdivina !== null &&
  botonAdivina !== undefined &&
  botonAdivina instanceof HTMLButtonElement
) {
      bloquearBoton(botonAdivina, true);
    }
  }
      const nuevaCarta = dameCarta(); //llama a la función dameCarta y guarda el resultado en la variable nuevaCarta.
      mostrarCarta(nuevaCarta); //llama a la función mostrarCarta con el valor de nuevaCarta.
      puntos += nuevaCarta.puntos; ///actualiza el valor de puntos.
      mostrarPuntuacion(puntos); //llama a la función mostrarPuntuacion con el valor de puntos.
    
    if (gameOver(puntos)) {
      //si la función gameOver devuelve true (los puntos actuales son mayores que 7.5)
      partidaFinalizada();
    }
  }
   botonPedir.addEventListener("click", handlePedirCarta); //añade un evento click al botón con id "pedir" que llama a la función handlePedirCarta cuando se hace clic.
}

if (
  botonPlantarse !== null &&
  botonPlantarse !== undefined &&
  botonPlantarse instanceof HTMLButtonElement
) {
  const handlePlantarse = () => {
    if (
      botonPlantarse !== null &&
      botonPlantarse !== undefined &&
      botonPlantarse instanceof HTMLButtonElement &&
      botonPedir !== null &&
      botonPedir !== undefined &&
      botonPedir instanceof HTMLButtonElement
    ) {
      bloquearBoton(botonPlantarse, true); //desactiva el botón para que no se pueda seguir plantando.
      bloquearBoton(botonPedir, true); //desactiva el botón para que no se pueda seguir pidiendo cartas.
      escribirMensaje(estadoMensaje(puntos)); //pinta el mensaje en el elemento.
    }
  };
  botonPlantarse.addEventListener("click", handlePlantarse); //añade un evento click al botón con id "plantarse" que llama a la función handlePlantarse cuando se hace clic.
} 

if (
  botonAdivina !== null &&
  botonAdivina !== undefined &&
  botonAdivina instanceof HTMLButtonElement
) {
  
  const handleAdivina = () => {
    if (
      botonPlantarse !== null &&
      botonPlantarse !== undefined &&
      botonPlantarse instanceof HTMLButtonElement &&
      botonPedir !== null &&
      botonPedir !== undefined &&
      botonPedir instanceof HTMLButtonElement &&
      botonAdivina !== null &&
      botonAdivina !== undefined &&
      botonAdivina instanceof HTMLButtonElement
    ) {
      bloquearBoton(botonAdivina, true); //desactiva el botón para que no se pueda seguir adivinando.
      bloquearBoton(botonPlantarse, true); //desactiva el botón para que no se pueda seguir plantando.
      bloquearBoton(botonPedir, true); //desactiva el botón para que no se pueda seguir pidiendo cartas.
    }
    const nuevaCarta = dameCarta(); //llama a la función dameCarta y guarda el resultado en la variable nuevaCarta.
    mostrarCarta(nuevaCarta); //llama a la función mostrarCarta con el valor de nuevaCarta.
    puntos += nuevaCarta.puntos; ///actualiza el valor de puntos.
    mostrarPuntuacion(puntos); //llama a la función mostrarPuntuacion 
    const texto = mensajeAdivina(puntos); //llama a la función mensajeAdivina con el valor de puntos.

    escribirMensaje(texto); //pinta el mensaje en el elemento.
  };

  botonAdivina.addEventListener("click", handleAdivina); //añade un evento click al botón con id "adivina" que llama a la función handleAdivina cuando se hace clic.
}





