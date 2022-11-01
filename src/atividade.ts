export function maiorNumeroNaLista(numeros: number[]): {
  maior: number;
  indice: number;
} {
  let maiorValor: number = 0;
  let indice: number = 0;
  numeros.forEach((valores: number, index: number) => {
    if (valores > maiorValor) {
      maiorValor = valores;
      indice = index;
    }
  });
  return { maior: maiorValor, indice: indice };
}
