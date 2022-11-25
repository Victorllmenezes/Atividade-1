import { Console } from "console";

export enum estadoInteracao {
  colidindo,
  naoColidindo,
  contido,
  contendo,
}

/**
 * Representa um retângulo por quatro valores inteiros X1, Y1, X2 e Y2,
   onde o par X1, Y1 representa a coordenada do canto superior esquerdo e o par X2,
   Y2 representa a coordenada do canto inferior direito

  @param x1 Coordenada X do canto superior esquerdo
  @param y1 Coordenada Y do canto superior esquerdo
  @param x2 Coordenada X do canto inferior direito
  @param y2 Coordenada Y do canto inferior direito

  @returns Um objeto do tipo Retangulo
 */
export class Retangulo {
  //Implementar propriedades
  x1: number;
  y1: number;
  x2: number;
  y2: number;

  //Implementar construtor

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  estaDentro(x: number, y: number): boolean {
    return x >= this.x1 && x <= this.x2 && y >= this.y2 && y <= this.y1;
  }
  //Implementar método estadoEmRelacaoA
  estadoEmRelacaoA(_objeto: Retangulo): estadoInteracao {
    const verticeEsquerdaCima = this.estaDentro(_objeto.x1, _objeto.y1);
    const verticeDireitaBaixo = this.estaDentro(_objeto.x2, _objeto.y2);
    const verticeDireitaCima = this.estaDentro(_objeto.x2, _objeto.y1);
    const verticeEsquerdaBaixo = this.estaDentro(_objeto.x1, _objeto.y2);

    console.log(verticeDireitaBaixo, verticeDireitaCima, verticeEsquerdaBaixo, verticeEsquerdaCima);
    const test1 = _objeto.x1 >= this.x1;

    if (verticeEsquerdaCima && verticeDireitaCima && verticeEsquerdaBaixo && verticeDireitaBaixo) {
      return estadoInteracao.contido;
    } else if (verticeEsquerdaCima || verticeDireitaCima || verticeEsquerdaBaixo || verticeDireitaBaixo) {
      return estadoInteracao.colidindo;
    } else if (test1) {
      return estadoInteracao.contendo;
    } else {
      return estadoInteracao.naoColidindo;
    }
  }
}
