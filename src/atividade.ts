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
 * Juntar n listas e ordena-las
 * @param listas Lista de listas de numeros
 */
export function juntarListasOrdenando(listas: number[][]): number[] {
  return listas.flat().sort((a, b) => a - b);
}

/**
 * Tirar a media da soma das listas
 * @param listas Lista de listas de numeros
 */
export function mediaDaSomaDasListas(listas: number[][]): number {
  const listaDeNumeros: number[] = listas.flat().sort((a, b) => a - b);
  let resultado = 0;
  console.log("teste:" + listaDeNumeros);
  listaDeNumeros.forEach((valores) => {
    resultado += valores;
  });
  return resultado;
}
