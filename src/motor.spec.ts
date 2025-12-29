import { vi } from "vitest";

import { Partida, puntosMaximos } from "./model";
import { jugar, numeroFinal, puntosCarta } from "./motor";

// Pruebas para la función Jugar

describe("jugar", () => {
it(" Si partida.puntos es igual a puntos maximos deberia devolver HAS_GANADO", () => {
// Given
const partida: Partida = { puntos: 7};
vi.spyOn(global.Math, 'random').mockReturnValue(0.9);
// When
const resultado = jugar(partida);
// Then
expect( resultado.estado).toBe("HAS_GANADO");
});


it(" Si partida.puntos es mayor a puntos maximos deberia devolver HAS_PERDIDO", () => {
// Given
const partida: Partida = { puntos: puntosMaximos };
// When
const resultado = jugar(partida);
// Then
expect( resultado.estado).toBe("HAS_PERDIDO");
});


it(" Si partida.puntos es menor a puntos maximos deberia devolver JUGANDO", () => {
// Given
const partida: Partida = { puntos: 5 };
vi.spyOn(global.Math, 'random').mockReturnValue(0.8);
// When
const resultado = jugar(partida);
// Then
expect( resultado.estado).toBe("JUGANDO");
});
});


// Pruebas para la función numeroFinal

describe("numeroFinal", () => {
it(" Deberia devolver numeroFinal igual a numeroBase para cartas del 1 al 7 (EJEMPLO 5)" , () => {
// Given
const numeroBase = 5;
// When
const resultado = numeroFinal(numeroBase);
// Then
expect( resultado).toBe(5);
});

it(" Deberia devolver numeroFinal igual a numeroBase para cartas del 1 al 7 (EJEMPLO 1)" , () => {
// Given
const numeroBase = 1;
// When
const resultado = numeroFinal(numeroBase);
// Then
expect( resultado).toBe(1);
});

it(" Deberia devolver numeroFinal igual a numeroBase para cartas del 1 al 7 (EJEMPLO 7)" , () => {
// Given
const numeroBase = 7;
// When
const resultado = numeroFinal(numeroBase);
// Then
expect( resultado).toBe(7);
});

it(" Deberia devolver numeroFinal igual a numeroBase + 2 para cartas aleatorias 8, 9 y 10 (EJEMPLO 9)", () => {
// Given
const numeroBase = 9;
// When
const resultado = numeroFinal(numeroBase);
// Then
expect( resultado).toBe(11);
});
});

// Pruebas para la función puntosCarta

describe("puntosCarta", () => {
it(" Deberia devolver puntosCarta igual a numeroFinal para cartas del 1 al 7 (EJEMPLO 4)" , () => {
// Given
const numeroFinal = 4;
// When
const resultado = puntosCarta(numeroFinal);
// Then
expect( resultado).toBe(4);
});

it(" Deberia devolver puntosCarta igual a numeroFinal para cartas del 1 al 7 (EJEMPLO 7)" , () => {
// Given
const numeroFinal = 7;
// When
const resultado = puntosCarta(numeroFinal);
// Then
expect( resultado).toBe(7);
});

it(" Deberia devolver puntosCarta igual a 0.5 para cartas finales 10, 11 y 12 (EJEMPLO 11)", () => {
// Given
const numeroFinal = 11;
// When
const resultado = puntosCarta(numeroFinal);
// Then
expect( resultado).toBe(0.5);
});
});
