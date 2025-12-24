import { puntosMaximos, Carta, Partida} from "./model"; //importa los elementos Carta, puntosMaximos y cartaBocaAbajo desde el archivo model.ts



const cartaAleatoria = (): number => Math.floor(Math.random() * 10) + 1; //genera un número aleatorio entre 1 y 10 y lo guarda en la variable cartaAleatoria.

const numeroBase = (): number => {
  return cartaAleatoria();
  //función que transforma el número de carta aleatoria en el número de carta de la baraja.
};

const numeroFinal = (numeroBase: number): number => {
  return numeroBase > 7 ? numeroBase + 2 : numeroBase;
  //función que transforma el número de carta de la baraja en el número final de la carta (teniendo en cuenta las figuras).
};
const puntosCarta = (numeroFinal: number): number => {
  return numeroFinal > 7 ? 0.5 : numeroFinal;
  //función que transforma el número final de la carta en los puntos de la carta (teniendo en cuenta las figuras).
};

const dameCarta = (): Carta => {
  const base = numeroBase();
  const final = numeroFinal(base);
  const puntosDecarta = puntosCarta(final);

  return { numero: final, src: "", alt: "", puntos: puntosDecarta };
};

export const hasPerdido = (partida:Partida): boolean => {
  return partida.puntos > puntosMaximos;
};

export const hasGanado = (partida:Partida): boolean => {
  return partida.puntos === puntosMaximos;

};

export const mensajeGameOver = (): string => {
  return "😟 Game Over. Has perdido, otra vez será";
};


export const mensajeVictoria = (): string => {
  return "🥳 ¡Lo has clavado! ¡Enhorabuena! 🎈🎊";
}; 

export const obtenerMensajePlantarse = (puntos: number): string => {
  if (puntos >= 6 && puntos <= 7) return "😊 Casi casi...";
  if (puntos >= 4 && puntos < 6) return "Te ha entrado el canguelo eh? 😅";
  if (puntos < 4) return "🙄 Has sido muy conservador.";
  return "Ups, algo ha ido mal 🙃.";
};

const sumarCarta = (partida:Partida, carta: Carta): void => {
  partida.puntos += carta.puntos;
};

export const hacerJugada = (partida:Partida): Carta => {
  const nuevaCarta = dameCarta();
  sumarCarta(partida, nuevaCarta);
  return nuevaCarta;
};



export const obtenerMensajeAdivina = (puntos: number): string => {
  if (puntos > puntosMaximos) return "😉 Bien jugado.";
  if (puntos <= puntosMaximos) return "😕 Te has rendido demasiado pronto.";
  return "Ups, algo ha ido mal 🙃.";
};




