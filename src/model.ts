export interface Carta {
  numero: number;
  src: string;
  alt: string;
  puntos: number;
}

export const cartaBocaAbajo: Carta = {
  numero: 0,
  puntos: 0,
  src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
  alt: "Carta boca abajo",
}

export const puntosMaximos = 7.5;