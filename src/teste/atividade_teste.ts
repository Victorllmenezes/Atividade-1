import { expect } from "chai";
import { maiorNumeroNaLista } from "../atividade";

describe("Teste atividade 1/2", () => {
  const lista = [56, 90, 60, 1, 13, 81, 99, 87, 25, 71, 11, 92, 59, 16, 77, 98, 52, 39, 45, 95];
  const listaNegativa = [-56, -90, -60, -1, -13, -81, -99, -87, -25, -71, -11, -92, -59, -16, -77, -98, -52, -39, -45, -95];

  it("Achando o maior numero da lista e seu indice", () => {
    const resultado = maiorNumeroNaLista(lista);
    expect(resultado).to.equal({ maior: 99, indice: 6 });
  });

  it("Achar o maior numero da lista negativa e seu indice", () => {
    const resultado = maiorNumeroNaLista(listaNegativa);
    expect(resultado).to.equal({ maior: -1, indice: 3 });
  });
});
