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
