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
    const figura1verticeEsquerdaCima = this.estaDentro(_objeto.x1, _objeto.y1);
    const figura1verticeDireitaBaixo = this.estaDentro(_objeto.x2, _objeto.y2);
    const figura1verticeDireitaCima = this.estaDentro(_objeto.x2, _objeto.y1);
    const figura1verticeEsquerdaBaixo = this.estaDentro(_objeto.x1, _objeto.y2);

    const figura2verticeEsquerdaCima = _objeto.estaDentro(this.x1, this.y1);
    const figura2verticeDireitaBaixo = _objeto.estaDentro(this.x2, this.y2);
    const figura2verticeDireitaCima = _objeto.estaDentro(this.x2, this.y1);
    const figura2verticeEsquerdaBaixo = _objeto.estaDentro(this.x1, this.y2);

    const linhaLateralColide = this.x2 >= _objeto.x2 || this.y2 >= _objeto.y2;

    if (figura1verticeEsquerdaCima && figura1verticeDireitaCima && figura1verticeEsquerdaBaixo && figura1verticeDireitaBaixo) {
      return estadoInteracao.contido;
      //
    } else if (figura1verticeEsquerdaCima || figura1verticeDireitaCima || figura1verticeEsquerdaBaixo || figura1verticeDireitaBaixo || linhaLateralColide) {
      return estadoInteracao.colidindo;
      //
    } else if (!figura2verticeDireitaBaixo && !figura2verticeDireitaCima && !figura2verticeEsquerdaBaixo && !figura2verticeEsquerdaCima) {
      return estadoInteracao.contendo;
      //
    } else {
      return estadoInteracao.naoColidindo;
    }
  }
}
