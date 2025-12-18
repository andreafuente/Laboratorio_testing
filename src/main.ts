/*const mostrarPuntuacion = (puntos: number): void => {
  //la función no devuelve nada solo pinta, trabaja con los puntos (tipo number).
  const puntuacionContainer = document.getElementById("puntuacion"); //busca en el html el elemento con id "puntuacion" y lo guarda en la variable puntuacionContainer.
  if (puntuacionContainer) {
    //si el elemento existe (no es null ni undefined)
    puntuacionContainer.textContent = String(puntos); //cambia el contenido de texto del elemento por el valor de puntos convertido a string.
  }
}

const cartaAleatoria = (): number => Math.floor(Math.random() * 10) + 1; //genera un número aleatorio entre 1 y 10 y lo guarda en la variable cartaAleatoria.

const dameCarta = (): number => {
  // genera una función que transforma la carta aleatoria en una carta de la baraja .
  const numeroCarta = cartaAleatoria(); //llama a la función cartaAleatoria y guarda el resultado en la variable numeroCarta.
  if (numeroCarta > 7) {
    return numeroCarta + 2; //si el número de carta es mayor que 7, se le suma 2 al número de la carta para obtener las figuras.
  } else {
    return numeroCarta; //si el número de la carta es 7 o menos, devuelve el mismo número
  }
}

const mostrarCarta = (carta: number): void => {
  //función que muestra la carta en el html.
  const cartaContainer = document.getElementById(
    "card-image"
  ) as HTMLImageElement | null; //busca en el html el elemento con id "card-image", lo guarda en la variable cartaContainer, se le informa que es un elemento de tipo img.

  if (!cartaContainer) return; //si no existe el elemento, sale de la función.

  switch (
    carta //según el valor de carta, pinta la imagen correspondiente en el html.
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

const valorCarta = (carta: number): number => {
  //calcula los puntos de la carta y guarda el resultado en la variable valorCarta.
  if (carta > 7) {
    return 0.5; //si los puntos de la carta son mayores que 7, devuelve 0.5 puntos.
  } else {
    return carta; //si los puntos de la carta son 7 o menos, devuelve los puntos de la carta.
  }
}

let puntosActuales: number = 0; //variable global que guarda los puntos actuales del jugador.
const sumarPuntos = (puntosActuales: number, valorCarta: number): number => {
  return puntosActuales + valorCarta;
}

const Mensaje = document.getElementById("mensaje") as HTMLElement; //busca en el html el elemento con id "mensaje", lo guarda en la variable Mensaje y se le informa que es un elemento de tipo HTMLElement.

const gameOver = (puntos: number): void => {
  //la función no devuelve nada solo pinta, trabaja con los puntos (tipo number).
  if (Mensaje && puntos > 7.5) {
    //si el elemento existe (no es null ni undefined y los puntos actuales son mayores que 7.5)
    Mensaje.textContent = "Game Over. Has perdido, otra vez será"; //cambia el contenido de texto del mensaje.
  }
}

  const handlePedirCarta = () => {
    if (puntosActuales <= 7.5) {
      const nuevaCarta = dameCarta(); //llama a la función dameCarta y guarda el resultado en la variable nuevaCarta.
      mostrarCarta(nuevaCarta); //llama a la función mostrarCarta con el valor de nuevaCarta.

      const puntosCarta = valorCarta(nuevaCarta); //llama a la función valorCarta con el valor de nuevaCarta y guarda el resultado en la variable puntosCarta.
      puntosActuales = sumarPuntos(puntosActuales, puntosCarta); //llama a la función sumarPuntos con los valores de puntosActuales y puntosCarta y actualiza el valor de puntosActuales.

      mostrarPuntuacion(puntosActuales); //llama a la función mostrarPuntuacion con el valor de puntosActuales.
      gameOver(puntosActuales); //llama a la función gameOver con el valor de puntosActuales.
    } else {
      gameOver(puntosActuales); //llama a la función gameOver con el valor de puntosActuales.
        if (botonPedir) { //si el botón existe (no es null ni undefined)
        botonPedir.disabled = true; //desactiva el botón para que no se pueda seguir pidiendo cartas.
    }
  }
}

const botonPedir = document.getElementById("pedir") as HTMLButtonElement; //busca en el html el elemento con id "pedir", lo guarda en la variable botonPedir, se le informa que es un elemento de tipo button.
  if (botonPedir) {
    botonPedir.addEventListener("click", handlePedirCarta); //añade un evento click al botón con id "pedir" que llama a la función handlePedirCarta cuando se hace clic.
  }

   const handlePlantarse = () => {
    if (botonPedir) {//si el botón existe (no es null ni undefined)
        botonPedir.disabled = true;//desactiva el botón para que no se pueda seguir pidiendo cartas.
    }

     if (botonPlantarse) {//si el botón existe (no es null ni undefined)
        botonPlantarse.disabled = true;//desactiva el botón para evitar dobles clics.
    }

  switch (true) {
  case puntosActuales === 7.5 :
   Mensaje.textContent = "¡Lo has clavado! ¡Enhorabuena!";
    break
    case puntosActuales >= 6 && puntosActuales <= 7:
      Mensaje.textContent = "Casi casi...";
    break
  ...
  default:
    mensaje = ...
}
    }
  }
}

const botonPlantarse = document.getElementById("stop") as HTMLButtonElement | null; //busca en el html el elemento con id "plantarse", lo guarda en la variable botonPlantarse, se le informa que es un elemento de tipo button.
  if (botonPlantarse) {
    botonPlantarse.addEventListener("click", handlePlantarse); //añade un evento click al botón con id "stop" que llama a la función handlePlantarse cuando se hace clic.
    }*/

let puntos: number = 0; //variable global que guarda los puntos actuales del jugador
let mensaje: string = ""; //variable global que guarda el mensaje final del juego
interface Carta {
  numero: number;
  src: string;
  alt: string;
  puntos: number;
}

const mostrarPuntuacion = (): void => {
  //la función no devuelve nada solo pinta, trabaja con los puntos (tipo number).
  const puntuacionContainer = document.getElementById("puntuacion"); //busca en el html el elemento con id "puntuacion" y lo guarda en la variable puntuacionContainer.
  if (
    puntuacionContainer !== null &&
    puntuacionContainer !== undefined &&
    puntuacionContainer instanceof HTMLParagraphElement
  ) {
    //si el elemento existe (no es null ni undefined)
    puntuacionContainer.textContent = String(puntos); //cambia el contenido de texto del elemento por el valor de puntos convertido a string.
  }
};

const cartaAleatoria = (): number => Math.floor(Math.random() * 10) + 1; //genera un número aleatorio entre 1 y 10 y lo guarda en la variable cartaAleatoria.

const dameCarta = (): Carta => {
  // genera una función que transforma la carta aleatoria en una carta de la baraja .
  const nuevaCarta = cartaAleatoria(); //llama a la función cartaAleatoria y guarda el resultado en la variable nuevaCarta.
  const numeroFinal = nuevaCarta > 7 ? nuevaCarta + 2 : nuevaCarta; //si el número de carta es mayor que 7, se le suma 2 al número de la carta para obtener las figuras.
  const puntosCarta = numeroFinal > 7 ? 0.5 : numeroFinal; //si el número de carta es mayor que 7, se le suma 2 al número de la carta para obtener las figuras.

  return { numero: numeroFinal, src: "", alt: "", puntos: puntosCarta };
};

const mostrarCarta = (nuevaCarta: Carta): void => {
  //función que muestra la carta en el html.
  const cartaContainer = document.getElementById("card-image");
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
    mensaje = "Game Over. Has perdido, otra vez será"; //cambia el contenido de texto del mensaje.
  }
  if (puntos <= 7.5) return;
  const mensajeContainer = document.getElementById("resultado"); //busca en el html el elemento con id "resultado" y lo guarda en la variable mensajeContainer.
  if (
    mensajeContainer !== null &&
    mensajeContainer !== undefined &&
    mensajeContainer instanceof HTMLParagraphElement
  ) {
    //si el elemento existe (no es null ni undefined)
    mensajeContainer.textContent = mensaje; //pinta el mensaje en el elemento.

    const botonPedir = document.getElementById("pedir"); //busca en el html el elemento con id "pedir", lo guarda en la variable botonPedir, se le informa que es un elemento de tipo button.
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
          botonPedir.disabled = true; //desactiva el botón para que no se pueda seguir pidiendo cartas.
        }
      };

      botonPedir.addEventListener("click", handlePedirCarta); //añade un evento click al botón con id "pedir" que llama a la función handlePedirCarta cuando se hace clic.
    }

    const botonPlantarse = document.getElementById("stop"); //busca en el html el elemento con id "plantarse", lo guarda en la variable botonPlantarse, se le informa que es un elemento de tipo button.
    if (
      botonPlantarse !== null &&
      botonPlantarse !== undefined &&
      botonPlantarse instanceof HTMLButtonElement
    ) {
      const handlePlantarse = () => {
        botonPlantarse.disabled = true; //desactiva el botón para que no se pueda seguir pidiendo cartas.const botonPedir = document.getElementById("pedir"); //busca en el html el elemento con id "pedir", lo guarda en la variable botonPedir, se le informa que es un elemento de tipo button.
        if (
          botonPedir !== null &&
          botonPedir !== undefined &&
          botonPedir instanceof HTMLButtonElement
        ) {
          botonPedir.disabled = true; //desactiva el botón para que no se pueda seguir pidiendo cartas.
        }

        switch (
          true //evalúa las condiciones de los puntos actuales para determinar el mensaje final.
        ) {
          case puntos === 7.5:
            mensaje = "¡Lo has clavado! ¡Enhorabuena!";
            break;
          case puntos >= 6 && puntos <= 7:
            mensaje = "Casi casi...";
            break;
          case puntos >= 4 && puntos < 6:
            mensaje = "Te ha entrado el canguelo eh?";
            break;
          case puntos < 4:
            mensaje = "Has sido muy conservador.";
            break;
          default:
            mensaje = "Algo ha ido mal.";
        }
        const mensajeContainer = document.getElementById("resultado"); //busca en el html el elemento con id "resultado" y lo guarda en la variable mensajeContainer.
        if (
          mensajeContainer !== null &&
          mensajeContainer !== undefined &&
          mensajeContainer instanceof HTMLParagraphElement
        ) {
          //si el elemento existe (no es null ni undefined)
          mensajeContainer.textContent = mensaje; //pinta el mensaje en el elemento.
        }
      };
      botonPlantarse.addEventListener("click", handlePlantarse); //añade un evento click al botón con id "plantarse" que llama a la función handlePlantarse cuando se hace clic.
    }

    const botonNuevaPartida = document.getElementById("nuevo"); //busca en el html el elemento con id "nuevo", lo guarda en la variable botonNuevo, se le informa que es un elemento de tipo button.
    if (
      botonNuevaPartida !== null &&
      botonNuevaPartida !== undefined &&
      botonNuevaPartida instanceof HTMLButtonElement
    ) {
      const handleNuevaPartida = () => {
        puntos = 0;
        mostrarPuntuacion();
        mostrarCarta({
          numero: 0,
          puntos: 0,
          src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
          alt: "Carta boca abajo",
        });
        if (
          botonPedir !== null &&
          botonPedir !== undefined &&
          botonPedir instanceof HTMLButtonElement
        ) {
          botonPedir.disabled = false;
        }
        if (
          botonPlantarse !== null &&
          botonPlantarse !== undefined &&
          botonPlantarse instanceof HTMLButtonElement
        ) {
          botonPlantarse.disabled = false;
        }
      };
      botonNuevaPartida.addEventListener("click", handleNuevaPartida); //añade un evento click al botón con id "nuevo" que llama a la función handleNuevaPartida cuando se hace clic.
    }
  }
};
