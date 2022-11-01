import { expect } from "chai";
import { maiorNumeroNaLista } from "../atividade";

describe("Teste atividade 1/2", () => {
  const lista = [56, 90, 60, 1, 13, 81, 99, 87, 25, 71, 11, 92, 59, 16, 77, 98, 52, 39, 45, 95];

  it("Achando o maior numero da lista", () => {
    const { maior } = maiorNumeroNaLista(lista);
    expect(maior).to.equal(99);
  });

  it("Achar indice do maior numero da lista", () => {
    const { indice } = maiorNumeroNaLista(lista);
    expect(indice).to.equal(6);
  });
});
