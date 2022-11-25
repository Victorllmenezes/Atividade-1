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
 
  x1:number;
  y1:number;
  x2:number;
  y2:number;

  constructor (x1:number, y1:number, x2:number, y2:number){
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  }
//Implementar método estadoEmRelacaoA

  estaDentro(x:number, y:number): boolean{
  return x >= this.x1 && x <= this.x2 && y <= this.y1 && y >= this.y2
}
  
estadoEmRelacaoA(objeto:Retangulo): estadoInteracao {
  const v1ObjetoEstaDentroDeMim = this.estaDentro(objeto.x1, objeto.y1);
  const v2ObjetoEstaDentroDeMim = this.estaDentro(objeto.x2, objeto.y2);
  const v3ObjetoEstaDentroDeMim = this.estaDentro(objeto.x1, objeto.y2);
  const v4ObjetoEstaDentroDeMim = this.estaDentro(objeto.x2, objeto.y1);

  if(v1ObjetoEstaDentroDeMim && v2ObjetoEstaDentroDeMim && v3ObjetoEstaDentroDeMim && v4ObjetoEstaDentroDeMim)
    return estadoInteracao.contendo
  else if (v1ObjetoEstaDentroDeMim || v2ObjetoEstaDentroDeMim || v3ObjetoEstaDentroDeMim || v4ObjetoEstaDentroDeMim)
    return estadoInteracao.colidindo
  

  const v1ObjetoEstaSendoContido = objeto.estaDentro(this.x1, this.y1);
  const v2ObjetoEstaSendoContido = objeto.estaDentro(this.x2, this.y2);

  if (v1ObjetoEstaSendoContido && v2ObjetoEstaSendoContido)
    return estadoInteracao.contido
  
  const passandoPorMim = this.x1 < objeto.x1 && this.x2 > objeto.x2 && this.y1 < objeto.y1 && this.y2 > objeto.y2;
  const passandoPorMim2 = objeto.x1 < this.x1 && objeto.x2 > this.x2 && objeto.y1 < this.y1 && objeto.y2 > this.y2;

  if (passandoPorMim || passandoPorMim2)
    return estadoInteracao.colidindo
    
  return estadoInteracao.naoColidindo;
}
}
