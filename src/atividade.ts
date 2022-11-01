export function maiorNumeroNaLista(numeros: number[]): number {
  
  return numeros.reduce(function(prev, current) { 
    return prev > current ? prev : current; 
  });
  
}
