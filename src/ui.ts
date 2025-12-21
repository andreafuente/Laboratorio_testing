import { Carta } from "./model"; //importa los elementos Carta, puntosMaximos y cartaBocaAbajo desde el archivo model.ts

export const puntuacionContainer = document.getElementById("puntuacion"); //busca en el html el elemento con id "puntuacion" y lo guarda en la variable puntuacionContainer.
export const cartaContainer = document.getElementById("card-image"); //busca en el html el elemento con id "card-image" y lo guarda en la variable cartaContainer.
export const mensajeContainer = document.getElementById("mensaje"); //busca en el html el elemento con id "mensaje" y lo guarda en la variable mensajeContainer.
export const botonPedir = document.getElementById("pedir"); //busca en el html el elemento con id "pedir", lo guarda en la variable botonPedir, se le informa que es un elemento de tipo button.
export const botonPlantarse = document.getElementById("stop"); //busca en el html el elemento con id "plantarse", lo guarda en la variable botonPlantarse, se le informa que es un elemento de tipo button.
export const botonNuevaPartida = document.getElementById("nuevo"); //busca en el html el elemento con id "nuevo", lo guarda en la variable botonNuevo, se le informa que es un elemento de tipo button.
export const botonAdivina = document.getElementById("adivina"); //busca en el html el elemento con id "adivina", lo guarda en la variable botonAdivina, se le informa que es un elemento de tipo button.

export const bloquearBoton = (
  boton: HTMLButtonElement,
  deshabilitado: boolean
): void => {
  //función que bloquea botones según el valor de deshabilitado.
  if (
    boton !== null &&
    boton !== undefined &&
    boton instanceof HTMLButtonElement
  ) {
    boton.disabled = deshabilitado;
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

export const mostrarCarta = (nuevaCarta: Carta): void => {
  //función que muestra la carta en el html.
  if (
    cartaContainer !== null &&
    cartaContainer !== undefined &&
    cartaContainer instanceof HTMLImageElement
  ) {
    //busca en el html el elemento con id "card-image", lo guarda en la variable cartaContainer, se le informa que es un elemento de tipo img.
    switch (
      nuevaCarta.numero //según el valor de carta, pinta la imagen correspondiente en el html.
    ) {
      case 1:
        cartaContainer.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"; // dependiendo del número de carta, se asigna una URL diferente al src de la imagen.
        cartaContainer.alt = "As de copas"; //dependiendo del número de carta, se asigna un texto alternativo diferente al alt de la imagen.
        break;
      case 2:
        cartaContainer.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        cartaContainer.alt = "Dos de copas";
        break;
      case 3:
        cartaContainer.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        cartaContainer.alt = "Tres de copas";
        break;
      case 4:
        cartaContainer.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        cartaContainer.alt = "Cuatro de copas";
        break;
      case 5:
        cartaContainer.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        cartaContainer.alt = "Cinco de copas";
        break;
      case 6:
        cartaContainer.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        cartaContainer.alt = "Seis de copas";
        break;
      case 7:
        cartaContainer.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        cartaContainer.alt = "Siete de copas";
        break;
      case 10:
        cartaContainer.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        cartaContainer.alt = "Sota de copas";
        break;
      case 11:
        cartaContainer.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        cartaContainer.alt = "Caballo de copas";
        break;
      case 12:
        cartaContainer.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        cartaContainer.alt = "Rey de copas";
        break;
      default:
        cartaContainer.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        cartaContainer.alt = "Carta boca abajo";
        break;
    }
  }
};

export const mostrarPuntuacion = (puntos:number): void => {
  //la función no devuelve nada solo pinta, trabaja con los puntos (tipo number).
  if (
    puntuacionContainer !== null &&
    puntuacionContainer !== undefined &&
    puntuacionContainer instanceof HTMLSpanElement
  ) {
    //si el elemento existe (no es null ni undefined)
    puntuacionContainer.textContent = String(puntos); //cambia el contenido de texto del elemento por el valor de puntos convertido a string.
  }
};



