export function maiorNumeroNaLista(numeros: number[]): {
  maior: number;
  indice: number;
} {
  let maiorValor: number = numeros[0];
  let indice: number = numeros[0];
  numeros.forEach((valores: number, index: number) => {
    if (valores > maiorValor) {
      maiorValor = valores;
      indice = index;
    }
  });
  return { maior: maiorValor, indice: indice };
}

/**
 * Juntar n listas
 * @param listas Lista de listas de numeros
 */
function juntarListas(listas: number[][]): number[] {
  return listas.flat();
}

/**
 * Juntar n listas e ordena-las
 * @param listas Lista de listas de numeros
 */
export function juntarListasOrdenando(listas: number[][]): number[] {
  return juntarListas(listas).sort((a, b) => a - b);
}

/**
 * Tirar a media da soma das listas
 * @param listas Lista de listas de numeros
 */
export function mediaDaSomaDasListas(listas: number[][]): number {
  const ListaDeNumeros = juntarListas(listas);
  return ListaDeNumeros.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual) / ListaDeNumeros.length;
}
