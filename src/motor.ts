import { puntosMaximos, Carta, Partida } from "./model"; //importa los elementos Carta, puntosMaximos y cartaBocaAbajo desde el archivo model.ts

export const crearPartida = (): Partida => {
  //genera una nueva partida con puntos iniciales a 0.
  return { puntos: 0 };
}
const cartaAleatoria = (): number => Math.floor(Math.random() * 10) + 1; //genera un número aleatorio entre 1 y 10 y lo guarda en la variable cartaAleatoria.

export const dameCarta = (): Carta => {
  // genera una función que transforma la carta aleatoria en una carta de la baraja .
  const nuevaCarta = cartaAleatoria(); //llama a la función cartaAleatoria y guarda el resultado en la variable nuevaCarta.
  const numeroFinal = nuevaCarta > 7 ? nuevaCarta + 2 : nuevaCarta; //si el número de carta es mayor que 7, se le suma 2 al número de la carta para obtener las figuras.
  const puntosCarta = numeroFinal > 7 ? 0.5 : numeroFinal; //si el número de carta es mayor que 7, se le suma 2 al número de la carta para obtener las figuras.

  return { numero: numeroFinal, src: "", alt: "", puntos: puntosCarta };
};

export const gameOver = (partida:Partida): boolean => {
  //la función no devuelve nada solo pinta, trabaja con los puntos (tipo number).
  if (partida.puntos > puntosMaximos) {
    return true; //si los puntos actuales son mayores que puntosMaximos, devuelve true.
  }
  return false; //si no, devuelve false.
};

 export const estadoMensaje = (partida:Partida): string => {
    switch (
      true //evalúa las condiciones de los puntos actuales para determinar el mensaje final.
    ) {
      case partida.puntos === puntosMaximos:
        return"🥳 ¡Lo has clavado! ¡Enhorabuena! 🎈🎊";
        break;
      case partida.puntos >= 6 && partida.puntos <= 7:
        return "😊 Casi casi...";
        break;
      case partida.puntos >= 4 && partida.puntos < 6:
        return "Te ha entrado el canguelo eh? 😅";
        break;
      case partida.puntos < 4:
        return "🙄 Has sido muy conservador.";
        break;
      default:
        return "Ups, algo ha ido mal 🙃.";
    }
  }

export const mensajeGameOver = (): string => {
  return "😟 Game Over. Has perdido, otra vez será"; //devuelve el mensaje final
};

export const mensajeAdivina = (partida:Partida): string => {
      return partida.puntos > puntosMaximos
        ? "😉 Bien jugado." //cambia el contenido de texto del mensaje.
        : "😕 Te has rendido demasiado pronto."; //cambia el contenido de texto del mensaje.
    };

 