import { puntosMaximos, Carta, Partida, EstadoPartida} from "./model"; //importa los elementos Carta, puntosMaximos y cartaBocaAbajo desde el archivo model.ts



const cartaAleatoria = (): number => Math.floor(Math.random() * 10) + 1; //genera un número aleatorio entre 1 y 10 y lo guarda en la variable cartaAleatoria.

const numeroBase = (): number => {
  return cartaAleatoria();
  //función que transforma el número de carta aleatoria en el número de carta de la baraja.
};

export const numeroFinal = (numeroBase: number): number => {
  return numeroBase > 7 ? numeroBase + 2 : numeroBase;
  //función que transforma el número de carta de la baraja en el número final de la carta (teniendo en cuenta las figuras).
};

export const puntosCarta = (numeroFinal: number): number => {
  return numeroFinal > 7 ? 0.5 : numeroFinal;
  //función que transforma el número final de la carta en los puntos de la carta (teniendo en cuenta las figuras).
};

const dameCarta = (): Carta => {
  const base = numeroBase();
  const final = numeroFinal(base);
  const puntosDecarta = puntosCarta(final);

  return { numero: final, src: "", alt: "", puntos: puntosDecarta };
};

const sumarCarta = (partida:Partida, carta: Carta): void => {
  partida.puntos += carta.puntos;
};

export const hacerJugada = (partida:Partida): Carta => {
  const nuevaCarta = dameCarta();
  sumarCarta(partida, nuevaCarta);
  return nuevaCarta;
};

export const jugar = (
  partida: Partida
): { carta: Carta; estado: EstadoPartida } => {
  const carta = hacerJugada(partida);

  if (partida.puntos > puntosMaximos) {
    return { carta, estado: "HAS_PERDIDO" };
  }

  if (partida.puntos === puntosMaximos) {
    return { carta, estado: "HAS_GANADO" };
  }

  return { carta, estado: "JUGANDO" };
};



export const plantarse = (partida: Partida): EstadoPartida => {
  if (partida.puntos >= 6 && partida.puntos <= 7) {
    return "PLANTADO_ALTO";
  }

  if (partida.puntos >= 4 && partida.puntos < 6) {
    return "PLANTADO_MEDIO";
  }
      return "PLANTADO_BAJO";
};

export const adivinar = (partida: Partida): { carta: Carta; estado: EstadoPartida } => {
 const carta = hacerJugada(partida);

  return partida.puntos > puntosMaximos
    ? { carta, estado: "ADIVINA_SE_PASA" }
    : { carta, estado: "ADIVINA_NO_SE_PASA" };
};

export const obtenerMensajePorEstado = (estado: EstadoPartida): string => {
  switch (estado) {
    case "HAS_GANADO":
      return "🥳 ¡Lo has clavado! ¡Enhorabuena! 🎈🎊";

    case "HAS_PERDIDO":
      return "😟 Game Over. Has perdido, otra vez será";

    case "PLANTADO_ALTO":
      return "😊 Casi casi...";

    case "PLANTADO_MEDIO":
      return "Te ha entrado el canguelo eh? 😅";

    case "PLANTADO_BAJO":
      return "🙄 Has sido muy conservador.";

    case "ADIVINA_SE_PASA":
      return "😉 Bien jugado.";

    case "ADIVINA_NO_SE_PASA":
      return "😕 Te has rendido demasiado pronto.";

    default:
      return "Ups, algo ha ido mal 🙃.";
  }
};










