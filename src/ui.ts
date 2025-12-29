import { Carta, Partida, crearPartida, cartaBocaAbajo } from "./model"; //importa los elementos cartabocabajo, Carta y puntosMáximos desde el archivo model.ts
import {obtenerMensajePorEstado, jugar, plantarse, adivinar
  
} from "./motor"; //importa la función obtenerMensajePorEstado desde el archivo motor.ts

const puntuacionContainer = document.getElementById("puntuacion"); //busca en el html el elemento con id "puntuacion" y lo guarda en la variable puntuacionContainer.
const cartaContainer = document.getElementById("card-image"); //busca en el html el elemento con id "card-image" y lo guarda en la variable cartaContainer.
const mensajeContainer = document.getElementById("mensaje"); //busca en el html el elemento con id "mensaje" y lo guarda en la variable mensajeContainer.
export const botonPedir = document.getElementById("pedir"); //busca en el html el elemento con id "pedir", lo guarda en la variable botonPedir, se le informa que es un elemento de tipo button.
export const botonPlantarse = document.getElementById("stop"); //busca en el html el elemento con id "plantarse", lo guarda en la variable botonPlantarse, se le informa que es un elemento de tipo button.
export const botonNuevaPartida = document.getElementById("nuevo"); //busca en el html el elemento con id "nuevo", lo guarda en la variable botonNuevo, se le informa que es un elemento de tipo button.
export const botonAdivina = document.getElementById("adivina"); //busca en el html el elemento con id "adivina", lo guarda en la variable botonAdivina, se le informa que es un elemento de tipo button.

export let partida: Partida = crearPartida(); //crea una nueva partida llamando a la función crearPartida y guarda el resultado en la variable partida.

const bloquearBoton = (
  boton: HTMLButtonElement,
  deshabilitado: boolean
): void => {
  if (
    boton !== null &&
    boton !== undefined &&
    boton instanceof HTMLButtonElement
  ) {
    //función que bloquea botones según el valor de deshabilitado.
    boton.disabled = deshabilitado;
  }
};

const bloquearTodosBotones = (activar: boolean): void => {
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
    bloquearBoton(botonPedir, activar); //desactiva el botón para que no se pueda seguir pidiendo cartas.
    bloquearBoton(botonPlantarse, activar); //desactiva el botón para que no se pueda seguir plantando.
    bloquearBoton(botonAdivina, activar); //desactiva el botón para que no se pueda seguir adivinando.
  }
};

export const bloquearPedirPlantar = (activar: boolean): void => {
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
    bloquearBoton(botonPedir, activar); //desactiva el botón para que no se pueda seguir pidiendo cartas.
    bloquearBoton(botonPlantarse, activar); //desactiva el botón para que no se pueda seguir plantando.
  }
};

export const escribirMensaje = (texto: string): void => {
  if (
    mensajeContainer !== null &&
    mensajeContainer !== undefined &&
    mensajeContainer instanceof HTMLParagraphElement
  ) {
    mensajeContainer.textContent = texto;
  }
};

const mostrarPuntuacion = (partida: Partida): void => {
  //la función no devuelve nada solo pinta, trabaja con los puntos (tipo number).
  if (
    puntuacionContainer !== null &&
    puntuacionContainer !== undefined &&
    puntuacionContainer instanceof HTMLSpanElement
  ) {
    //si el elemento existe (no es null ni undefined)
    puntuacionContainer.textContent = String(partida.puntos); //cambia el contenido de texto del elemento por el valor de puntos convertido a string.
  }
};

const obtenerInfoCarta = (
  numeroFinal: number
): { src: string; alt: string } => {
  switch (numeroFinal) {
    case 1:
      return {
        src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
        alt: "As de copas",
      };

    case 2:
      return {
        src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
        alt: "Dos de copas",
      };
    case 3:
      return {
        src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
        alt: "Tres de copas",
      };
    case 4:
      return {
        src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
        alt: "Cuatro de copas",
      };
    case 5:
      return {
        src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
        alt: "Cinco de copas",
      };
    case 6:
      return {
        src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
        alt: "Seis de copas",
      };
    case 7:
      return {
        src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
        alt: "Siete de copas",
      };
    case 10:
      return {
        src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
        alt: "Sota de copas",
      };
    case 11:
      return {
        src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
        alt: "Caballo de copas",
      };
    case 12:
      return {
        src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
        alt: "Rey de copas",
      };
    default:
      return {
        src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
        alt: "Carta boca abajo",
      };
  }
};

const mostrarCarta = (carta: Carta): void => {
  //función que muestra la carta en el html.
  if (
    cartaContainer !== null &&
    cartaContainer !== undefined &&
    cartaContainer instanceof HTMLImageElement
  ) {
    const info = obtenerInfoCarta(carta.numero);

    cartaContainer.src = info.src;
    cartaContainer.alt = info.alt;
  }
};

const pintarJugada = (partida: Partida, carta: Carta): void => {
  mostrarCarta(carta);
  mostrarPuntuacion(partida);
};

const terminarPartida = (mensajeFinal: string): void => {
  bloquearTodosBotones(true);
  escribirMensaje(mensajeFinal);
};


export const resetJuego = (): void => {
  //funcion para resetear la partida
  bloquearTodosBotones(false);
  partida=crearPartida();
  mostrarPuntuacion(partida);
  mostrarCarta(cartaBocaAbajo);
  escribirMensaje("");
};

export const handlePedirCarta = (): void => {
  const resultado = jugar(partida);              
  pintarJugada(partida, resultado.carta);       

  if (resultado.estado !== "JUGANDO") {
    terminarPartida(obtenerMensajePorEstado(resultado.estado));
    return;
  } 
    escribirMensaje("");                         
};

export const handlePlantarse = () => {
  const resultado = plantarse(partida);
  escribirMensaje(obtenerMensajePorEstado(resultado));
  bloquearPedirPlantar(true);
};

export const handleNuevaPartida = () => {
  resetJuego(); //llama a la función resetJuego para reiniciar el juego.
};

export const handleAdivina = () => {
  const resultado = adivinar(partida);              
  pintarJugada(partida, resultado.carta);       
  terminarPartida(obtenerMensajePorEstado(resultado.estado));                
};
