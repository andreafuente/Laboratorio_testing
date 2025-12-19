const puntuacionContainer = document.getElementById("puntuacion"); //busca en el html el elemento con id "puntuacion" y lo guarda en la variable puntuacionContainer.
const cartaContainer = document.getElementById("card-image");//busca en el html el elemento con id "card-image" y lo guarda en la variable cartaContainer.
const mensajeContainer = document.getElementById("mensaje"); //busca en el html el elemento con id "mensaje" y lo guarda en la variable mensajeContainer.
const botonPedir = document.getElementById("pedir"); //busca en el html el elemento con id "pedir", lo guarda en la variable botonPedir, se le informa que es un elemento de tipo button.
const botonPlantarse = document.getElementById("stop"); //busca en el html el elemento con id "plantarse", lo guarda en la variable botonPlantarse, se le informa que es un elemento de tipo button.
const botonNuevaPartida = document.getElementById("nuevo"); //busca en el html el elemento con id "nuevo", lo guarda en la variable botonNuevo, se le informa que es un elemento de tipo button.
const botonAdivina = document.getElementById("adivina"); //busca en el html el elemento con id "adivina", lo guarda en la variable botonAdivina, se le informa que es un elemento de tipo button.


let puntos: number = 0; //variable global que guarda los puntos actuales del jugador
let mensaje: string = ""; //variable global que guarda el mensaje final del juego
interface Carta {
  numero: number;
  src: string;
  alt: string;
  puntos: number;
}

const bloquearBoton = (
  boton: HTMLButtonElement | null,
  deshabilitado: boolean
): void => {//función que bloquea botones según el valor de deshabilitado.
  if (!boton) return;
  boton.disabled = deshabilitado;
}

const escribirMensaje = (texto: string): void => {
  if (
    mensajeContainer !== null &&
    mensajeContainer !== undefined &&
    mensajeContainer instanceof HTMLParagraphElement
  ) {
    mensajeContainer.textContent = texto;
  }
}

const resetJuego = (): void => {
    if (
      botonPlantarse !== null &&
      botonPlantarse !== undefined &&
      botonPlantarse instanceof HTMLButtonElement &&
      botonPedir !== null &&
      botonPedir !== undefined &&
      botonPedir instanceof HTMLButtonElement
    ) {
      bloquearBoton(botonPlantarse, false); //Habilita el botón para que se pueda plantar.
      bloquearBoton(botonPedir, false); //Habilita el botón para que se puedan pedir cartas.
    }
  puntos = 0;
  mostrarPuntuacion();
  mostrarCarta({
    numero: 0,
    puntos: 0,
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
    alt: "Carta boca abajo",
  });
  escribirMensaje("");
}

const mostrarPuntuacion = (): void => {
  //la función no devuelve nada solo pinta, trabaja con los puntos (tipo number).
  if (
    puntuacionContainer !== null &&
    puntuacionContainer !== undefined &&
    puntuacionContainer instanceof HTMLSpanElement
  ) {
    //si el elemento existe (no es null ni undefined)
    puntuacionContainer.textContent = String(puntos); //cambia el contenido de texto del elemento por el valor de puntos convertido a string.
  }
}

const cartaAleatoria = (): number => Math.floor(Math.random() * 10) + 1; //genera un número aleatorio entre 1 y 10 y lo guarda en la variable cartaAleatoria.

const dameCarta = (): Carta => {// genera una función que transforma la carta aleatoria en una carta de la baraja .
  const nuevaCarta = cartaAleatoria(); //llama a la función cartaAleatoria y guarda el resultado en la variable nuevaCarta.
  const numeroFinal = nuevaCarta > 7 ? nuevaCarta + 2 : nuevaCarta; //si el número de carta es mayor que 7, se le suma 2 al número de la carta para obtener las figuras.
  const puntosCarta = numeroFinal > 7 ? 0.5 : numeroFinal; //si el número de carta es mayor que 7, se le suma 2 al número de la carta para obtener las figuras.

  return { numero: numeroFinal, src: "", alt: "", puntos: puntosCarta };
}

const mostrarCarta = (nuevaCarta: Carta): void => {
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

const gameOver = (): void => {
  //la función no devuelve nada solo pinta, trabaja con los puntos (tipo number).
  if (puntos > 7.5) {
    //si el elemento existe (no es null ni undefined y los puntos actuales son mayores que 7.5)
    mensaje = "😟 Game Over. Has perdido, otra vez será"; //cambia el contenido de texto del mensaje.
  }
  if (puntos <= 7.5) return;
  if (
    mensajeContainer !== null &&
    mensajeContainer !== undefined &&
    mensajeContainer instanceof HTMLParagraphElement
  ) {
    //si el elemento existe (no es null ni undefined)
    escribirMensaje(mensaje); //pinta el mensaje en el elemento.
  }
}

if (
  botonPedir !== null &&
  botonPedir !== undefined &&
  botonPedir instanceof HTMLButtonElement
) {
  const handlePedirCarta = () => {
    if (puntos <= 7.5) {
      const nuevaCarta = dameCarta(); //llama a la función dameCarta y guarda el resultado en la variable nuevaCarta.
      mostrarCarta(nuevaCarta); //llama a la función mostrarCarta con el valor de nuevaCarta.
      puntos += nuevaCarta.puntos; ///actualiza el valor de puntos.
      mostrarPuntuacion(); //llama a la función mostrarPuntuacion con el valor de puntos.
    }
    if (puntos > 7.5) {
      gameOver(); //llama a la función gameOver.
      bloquearBoton(botonPedir, true); //desactiva el botón para que no se pueda seguir pidiendo cartas.
    }
  };

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
    }

    switch (
      true //evalúa las condiciones de los puntos actuales para determinar el mensaje final.
    ) {
      case puntos === 7.5:
        mensaje = "🥳 ¡Lo has clavado! ¡Enhorabuena! 🎈🎊";
        break;
      case puntos >= 6 && puntos <= 7:
        mensaje = "😊 Casi casi...";
        break;
      case puntos >= 4 && puntos < 6:
        mensaje = "Te ha entrado el canguelo eh? 😅";
        break;
      case puntos < 4:
        mensaje = "🙄 Has sido muy conservador.";
        break;
      default:
        mensaje = "Ups, algo ha ido mal 🙃.";
    }
    if (
      mensajeContainer !== null &&
      mensajeContainer !== undefined &&
      mensajeContainer instanceof HTMLParagraphElement
    ) {
      //si el elemento existe (no es null ni undefined)
      escribirMensaje(mensaje); //pinta el mensaje en el elemento.
    }
  };
  botonPlantarse.addEventListener("click", handlePlantarse); //añade un evento click al botón con id "plantarse" que llama a la función handlePlantarse cuando se hace clic.
}

if (
  botonNuevaPartida !== null &&
  botonNuevaPartida !== undefined &&
  botonNuevaPartida instanceof HTMLButtonElement
) {
  
  const handleNuevaPartida = () => {
    resetJuego(); //llama a la función resetJuego para reiniciar el juego.
  }

  botonNuevaPartida.addEventListener("click", handleNuevaPartida); //añade un evento click al botón con id "nuevo" que llama a la función handleNuevaPartida cuando se hace clic.
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
      botonPedir instanceof HTMLButtonElement
    ) {
      bloquearBoton(botonAdivina, true); //desactiva el botón para que no se pueda seguir adivinando.
      bloquearBoton(botonPlantarse, true); //desactiva el botón para que no se pueda seguir plantando.
      bloquearBoton(botonPedir, true); //desactiva el botón para que no se pueda seguir pidiendo cartas.
    }
    
    const nuevaCarta = dameCarta(); //llama a la función dameCarta y guarda el resultado en la variable nuevaCarta.
    mostrarCarta(nuevaCarta); //llama a la función mostrarCarta con el valor de nuevaCarta.
    puntos += nuevaCarta.puntos; ///actualiza el valor de puntos.
    mostrarPuntuacion(); //llama a la función mostrarPuntuacion con el valor de puntos.
    if (
      mensajeContainer !== null &&
      mensajeContainer !== undefined &&
      mensajeContainer instanceof HTMLParagraphElement
    ) {
      if (puntos > 7.5) {
        //si el elemento existe (no es null ni undefined y los puntos actuales son mayores que 7.5)
        mensaje = "😉 Bien jugado."; //cambia el contenido de texto del mensaje.
      } else { 
        mensaje = "😕 Te has rendido demasiado pronto."; //cambia el contenido de texto del mensaje.
      }
      escribirMensaje(mensaje); //pinta el mensaje en el elemento.
    }
  };

  botonAdivina.addEventListener("click", handleAdivina); //añade un evento click al botón con id "adivina" que llama a la función handleAdivina cuando se hace clic.
}
