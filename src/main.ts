const mostrarPuntuacion = (puntos: number): void => { //la función no devuelve nada solo pinta, trabaja con los puntos (tipo number).
    const puntuacionContainer = document.getElementById("puntuacion"); //busca en el html el elemento con id "puntuacion" y lo guarda en la variable puntuacionContainer.
        if (puntuacionContainer)  { //si el elemento existe (no es null ni undefined) 
    puntuacionContainer.textContent = String(puntos); //cambia el contenido de texto del elemento por el valor de puntos convertido a string.
   }
}

const cartaAleatoria = (): number => Math.floor(Math.random() * 10) + 1;//genera un número aleatorio entre 1 y 10 y lo guarda en la variable cartaAleatoria.

const dameCarta = (): number => { // genera una función que transforma la carta aleatoria en una carta de la baraja .
    const numeroCarta = cartaAleatoria(); //llama a la función cartaAleatoria y guarda el resultado en la variable numeroCarta.
    if (numeroCarta > 7 ){
        return numeroCarta + 2;  //si el número de carta es mayor que 7, se le suma 2 al número de la carta para obtener las figuras.
    } else{
        return numeroCarta; //si el número de la carta es 7 o menos, devuelve el mismo número
    }
}

const mostrarCarta = (carta: number) : void => { //función que muestra la carta en el html.
    const cartaContainer = document.getElementById("card-image") as HTMLImageElement | null; //busca en el html el elemento con id "card-image", lo guarda en la variable cartaContainer, se le informa que es un elemento de tipo img.
         
        if (!cartaContainer) return; //si no existe el elemento, sale de la función.
        
        switch (carta) { //según el valor de carta, pinta la imagen correspondiente en el html.
            case 1:
                cartaContainer.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"; // dependiendo del número de carta, se asigna una URL diferente al src de la imagen.
                cartaContainer.alt = "As de copas"; //dependiendo del número de carta, se asigna un texto alternativo diferente al alt de la imagen.
                break;
            case 2:
                cartaContainer.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
                cartaContainer.alt = "Dos de copas";
                break;
            case 3:
                cartaContainer.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
                cartaContainer.alt = "Tres de copas";
                break;
            case 4:
                cartaContainer.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
                cartaContainer.alt = "Cuatro de copas";
                break;
            case 5:
                cartaContainer.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
                cartaContainer.alt = "Cinco de copas";
                break;
            case 6:
                cartaContainer.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
                cartaContainer.alt = "Seis de copas";
                break;
            case 7:
                cartaContainer.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
                cartaContainer.alt = "Siete de copas";
                break;
            case 10:
                cartaContainer.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
                cartaContainer.alt = "Sota de copas";
                break;
            case 11:
                cartaContainer.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
                cartaContainer.alt = "Caballo de copas";
                break;
            case 12:
                cartaContainer.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
                cartaContainer.alt = "Rey de copas";
                break;
            default:
                cartaContainer.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
                cartaContainer.alt = "Carta boca abajo";
                break;
            }
}

const valorCarta = (carta: number): number => { //calcula los puntos de la carta y guarda el resultado en la variable valorCarta.
    if (carta > 7){
        return 0.5; //si los puntos de la carta son mayores que 7, devuelve 0.5 puntos.
    }
    else{
        return carta; //si los puntos de la carta son 7 o menos, devuelve los puntos de la carta.
    }
}

let puntosActuales: number = 0; //variable global que guarda los puntos actuales del jugador.
const sumarPuntos = (puntosActuales: number, valorCarta: number): number => {

    return puntosActuales + valorCarta;
}

const gameOver = (puntos: number): void => { //la función no devuelve nada solo pinta, trabaja con los puntos (tipo number).
    const hasPerdido = document.getElementById("mensaje"); //busca en el html el elemento con id "mensaje" y lo guarda en la variable hasPerdido.
        if (hasPerdido && puntos > 7.5)  { //si el elemento existe (no es null ni undefined y los puntos actuales son mayores que 7.5) 
    hasPerdido.textContent = 'Game Over. Has perdido, otra vez será'; //cambia el contenido de texto del mensaje.
   }
   
   const handlePedirCarta = () => {
    if (puntosActuales <= 7.5) {
        const nuevaCarta = dameCarta();//llama a la función dameCarta y guarda el resultado en la variable nuevaCarta.
        mostrarCarta(nuevaCarta); //llama a la función mostrarCarta con el valor de nuevaCarta.

        const puntosCarta = valorCarta(nuevaCarta); //llama a la función valorCarta con el valor de nuevaCarta y guarda el resultado en la variable puntosCarta.
        puntosActuales = sumarPuntos(puntosActuales, puntosCarta); //llama a la función sumarPuntos con los valores de puntosActuales y puntosCarta y actualiza el valor de puntosActuales.

        mostrarPuntuacion(puntosActuales); //llama a la función mostrarPuntuacion con el valor de puntosActuales.
        gameOver(puntosActuales); //llama a la función gameOver con el valor de puntosActuales.
    } else {
        
        gameOver(puntosActuales); //llama a la función gameOver con el valor de puntosActuales.
        if (botonPedir!== null && botonPedir!== undefined)
          botonPedir.disabled = true;
    }
}
const botonPedir = document.getElementById("pedir") as HTMLButtonElement | null; //busca en el html el elemento con id "pedir", lo guarda en la variable botonPedir, se le informa que es un elemento de tipo button.
if (botonPedir) {
    botonPedir.addEventListener("click", handlePedirCarta); //añade un evento click al botón con id "pedir" que llama a la función handlePedirCarta cuando se hace clic.
}
}