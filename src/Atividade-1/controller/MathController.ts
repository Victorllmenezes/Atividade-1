import test from "node:test";

/**
 *
 * @param valores Multiplica os valores de uma lista e retorna o resultado.
 * @returns resultado da multiplicação.
 */
export function MultiplicarValores(valores: number[]): number {
  let resultado = valores.reduce(
    (valorAnterior, valorAtual) => valorAnterior * valorAtual,
    1
  );
  if (valores[0] == undefined) {
    return (resultado = 0);
  } else return resultado;
}
