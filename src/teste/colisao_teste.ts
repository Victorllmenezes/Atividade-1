import { expect } from "chai";
import { Retangulo, estadoInteracao } from "../classes/retangulo";
import { desenharRetangulos } from "../Ferramentas/Desenhador";

describe.only("Teste atividade de colisão", () => {
  it("Detecção de colisão", () => {
    const retangulo1 = new Retangulo(2, 7, 5, 3);
    const retangulo2 = new Retangulo(1, 5, 3, 1);
    desenharRetangulos(retangulo1, retangulo2);
    expect(retangulo1.estadoEmRelacaoA(retangulo2)).equal(estadoInteracao.colidindo);
  });

  it("Detecção de colisão 2", () => {
    const retangulo1 = new Retangulo(0, 4, 6, 0);
    const retangulo2 = new Retangulo(2, 7, 5, 3);
    desenharRetangulos(retangulo1, retangulo2);
    expect(retangulo1.estadoEmRelacaoA(retangulo2)).equal(estadoInteracao.colidindo);
  });

  it("Detecção de colisão 3 (Cortando no eixo x)", () => {
    const retangulo1 = new Retangulo(0, 4, 6, 0);
    const retangulo2 = new Retangulo(2, 7, 5, -1);
    desenharRetangulos(retangulo1, retangulo2);
    expect(retangulo1.estadoEmRelacaoA(retangulo2)).equal(estadoInteracao.colidindo);
  });

  it("Detecção de não colisão", () => {
    const retangulo1 = new Retangulo(4, 7, 5, 3);
    const retangulo2 = new Retangulo(1, 5, 3, 1);
    desenharRetangulos(retangulo1, retangulo2);
    expect(retangulo1.estadoEmRelacaoA(retangulo2)).equal(estadoInteracao.naoColidindo);
  });

  it("Detecção de não colisão 2", () => {
    const retangulo1 = new Retangulo(0, 6, 1, 3);
    const retangulo2 = new Retangulo(2, 4, 4, 2);
    desenharRetangulos(retangulo1, retangulo2);
    expect(retangulo1.estadoEmRelacaoA(retangulo2)).equal(estadoInteracao.naoColidindo);
  });

  it("Detecção de colisão com sobreposição", () => {
    const retangulo1 = new Retangulo(2, 7, 5, 3);
    const retangulo2 = new Retangulo(3, 6, 4, 4);
    desenharRetangulos(retangulo1, retangulo2);
    expect(retangulo1.estadoEmRelacaoA(retangulo2)).equal(estadoInteracao.contendo);
  });

  it("Detecção de colisão sobreposto", () => {
    const retangulo1 = new Retangulo(3, 6, 4, 4);
    const retangulo2 = new Retangulo(2, 7, 5, 3);
    desenharRetangulos(retangulo1, retangulo2);
    expect(retangulo1.estadoEmRelacaoA(retangulo2)).equal(estadoInteracao.contido);
  });
});
