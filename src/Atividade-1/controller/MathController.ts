import test from "node:test";

/**
 *
 * @param valores Multiplica os valores de uma lista e retorna o resultado.
 * @returns resultado da multiplicação.
 */
export function MultiplicarValores(valores: number[]): number {
  if (valores.length == 0) {
    return 0;
  } else {
    return valores.reduce(
      (valorAnterior, valorAtual) => valorAnterior * valorAtual,
      1
    );
  }
}
