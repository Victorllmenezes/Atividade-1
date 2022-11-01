<<<<<<< HEAD
export function maiorNumeroNaLista(numeros: number[]): number {
  
  return numeros.reduce(function(prev, current) { 
    return prev > current ? prev : current; 
  });
  
=======
export function maiorNumeroNaLista(numeros: number[]): { maior: number; indice: number } {
  const maiorNumero: number = numeros.reduce(function (anterior: number, atual: number) {
    return anterior > atual ? anterior : atual;
  });
  return maiorNumero;
>>>>>>> atividade2
}
