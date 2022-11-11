import { expect } from "chai";
import { Retangulo, estadoInteracao } from "../classes/retangulo";

describe("Teste atividade de colisão", () => {
  it("Detecção de colisão", () => {
    const retangulo1 = new Retangulo(2, 7, 5, 3);
    const retangulo2 = new Retangulo(1, 5, 3, 1);
    expect(retangulo1.estadoEmRelacaoA(retangulo2)).equal(estadoInteracao.colidindo);
  });

  it("Detecção de não colisão", () => {
    const retangulo1 = new Retangulo(4, 7, 5, 3);
    const retangulo2 = new Retangulo(1, 5, 3, 1);
    expect(retangulo1.estadoEmRelacaoA(retangulo2)).equal(estadoInteracao.naoColidindo);
  });

  it("Detecção de colisão com sobreposição", () => {
    const retangulo1 = new Retangulo(2, 7, 5, 3);
    const retangulo2 = new Retangulo(3, 6, 4, 4);
    expect(retangulo1.estadoEmRelacaoA(retangulo2)).equal(estadoInteracao.contendo);
  });
});
