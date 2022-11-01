export function maiorNumeroNaLista(numeros: number[]): number {
  const maiorNumero: number = numeros.reduce(function (
    anterior: number,
    atual: number
  ) {
    return anterior > atual ? anterior : atual;
  });
  return maiorNumero;
}
