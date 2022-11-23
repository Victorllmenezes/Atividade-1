export function MultiplicarValores(valores: number[]): number {
  let retorno: number = 1;
  valores.forEach((valor) => (retorno = retorno * valor));
  return retorno;
}
