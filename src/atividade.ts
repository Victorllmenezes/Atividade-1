export function maiorNumeroNaLista(numeros: number[]): { maior: number; indice: number } {
    let maior = numeros[0];
    let indice = numeros[0];
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
                indice = i;
        
            } 
        }
        return { maior, indice };  
}

/**
 * Juntar n listas e ordena-las
 * @param listas Lista de listas de numeros
 */
export function juntarListasOrdenando(listas: number[][]): number[] {
  throw Error("Not implemented");
}

/**
 * Tirar a media da soma das listas
 * @param listas Lista de listas de numeros
 */
export function mediaDaSomaDasListas(listas: number[][]): number {
  throw Error("Not implemented");
}
