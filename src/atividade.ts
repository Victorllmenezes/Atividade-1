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
    