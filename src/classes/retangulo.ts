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
  constructor(private x1: number, private y1: number, private x2: number, private y2: number) {
    if (x1 > x2) {
      throw new Error("x1 deve ser menor que x2");
    }
    if (y1 < y2) {
      throw new Error("y1 deve ser maior que y2");
    }
  }

  pontoEstaContidoEmMim(x: number, y: number): boolean {
    return x >= this.x1 && x <= this.x2 && y <= this.y1 && y >= this.y2;
  }

  estadoEmRelacaoA(retangulo: Retangulo): estadoInteracao {
    const v1ContidoEmMim = this.pontoEstaContidoEmMim(retangulo.x1, retangulo.y1);
    const v2ContidoEmMim = this.pontoEstaContidoEmMim(retangulo.x2, retangulo.y2);
    const v3ContidoEmMim = this.pontoEstaContidoEmMim(retangulo.x1, retangulo.y2);
    const v4ContidoEmMim = this.pontoEstaContidoEmMim(retangulo.x2, retangulo.y1);

    if (v1ContidoEmMim && v2ContidoEmMim) {
      return estadoInteracao.contendo;
    }

    const v1ContidoNoRetangulo = retangulo.pontoEstaContidoEmMim(this.x1, this.y1);
    const v2ContidoNoRetangulo = retangulo.pontoEstaContidoEmMim(this.x2, this.y2);
    const v3ContidoNoRetangulo = retangulo.pontoEstaContidoEmMim(this.x1, this.y2);
    const v4ContidoNoRetangulo = retangulo.pontoEstaContidoEmMim(this.x2, this.y1);

    if (v1ContidoNoRetangulo && v2ContidoNoRetangulo) {
      return estadoInteracao.contido;
    }

    const corpoCortandoNoEixoX = retangulo.x1 >= this.x1 && retangulo.x2 <= this.x2 && this.y1 <= retangulo.y1 && this.y2 >= retangulo.y2;
    const corpoCortandoNoEixoY = retangulo.y1 <= this.y1 && retangulo.y2 >= this.y2 && this.x1 >= retangulo.x1 && this.x2 <= retangulo.x2;
    const meuCorpoCortandoNoEixoX = this.x1 >= retangulo.x1 && this.x2 <= retangulo.x2 && retangulo.y1 <= this.y1 && retangulo.y2 >= this.y2;
    const meuCorpoCortandoNoEixoY = this.y1 <= retangulo.y1 && this.y2 >= retangulo.y2 && retangulo.x1 >= this.x1 && retangulo.x2 <= this.x2;

    //Se algum vertice estiver contido em mim ou no retangulo ou o corpo estiver cortando algum eixo em mim ou no retangulo está em colidindo
    if (
      v1ContidoEmMim ||
      v2ContidoEmMim ||
      v3ContidoEmMim ||
      v4ContidoEmMim ||
      v1ContidoNoRetangulo ||
      v2ContidoNoRetangulo ||
      v3ContidoNoRetangulo ||
      v4ContidoNoRetangulo ||
      corpoCortandoNoEixoX ||
      corpoCortandoNoEixoY ||
      meuCorpoCortandoNoEixoX ||
      meuCorpoCortandoNoEixoY
    ) {
      return estadoInteracao.colidindo;
    }

    return estadoInteracao.naoColidindo;
  }
}
