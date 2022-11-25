import { Retangulo } from "../classes/retangulo";

//Função que recebe 2 retangulos e desenha os 2 retangulos no console
export function desenharRetangulos(retangulo1: Retangulo, retangulo2: Retangulo) {
  const x1 = retangulo1.x1;
  const y1 = retangulo1.y1;
  const x2 = retangulo1.x2;
  const y2 = retangulo1.y2;

  const x3 = retangulo2.x1;
  const y3 = retangulo2.y1;
  const x4 = retangulo2.x2;
  const y4 = retangulo2.y2;

  const maiorX = Math.max(x1, x2, x3, x4);
  const menorX = Math.min(x1, x2, x3, x4);
  const maiorY = Math.max(y1, y2, y3, y4);
  const menorY = Math.min(y1, y2, y3, y4);

  let linha = "";
  for (let y = maiorY; y >= menorY; y--) {
    for (let x = menorX; x <= maiorX; x++) {
      if (retangulo1.estaDentro(x, y) && retangulo2.estaDentro(x, y)) {
        linha += " # ";
      } else if (retangulo1.estaDentro(x, y)) {
        linha += " 1 ";
      } else if (retangulo2.estaDentro(x, y)) {
        linha += " 2 ";
      } else {
        linha += "   ";
      }
    }
    console.log(linha);
    linha = "";
  }
}
