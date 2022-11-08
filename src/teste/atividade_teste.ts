import { expect } from "chai";
import { juntarListasOrdenando, maiorNumeroNaLista, mediaDaSomaDasListas as mediaDasListas } from "../atividade";

describe("Teste atividade 1/2", () => {
  const lista = [56, 90, 60, 1, 13, 81, 99, 87, 25, 71, 11, 92, 59, 16, 77, 98, 52, 39, 45, 95];
  const listaNegativa = [-56, -90, -60, -1, -13, -81, -99, -87, -25, -71, -11, -92, -59, -16, -77, -98, -52, -39, -45, -95];

  it("Achando o maior numero da lista e seu indice", () => {
    const resultado = maiorNumeroNaLista(lista);
    expect(resultado).to.deep.equals({ maior: 99, indice: 6 });
  });

  it("Achar o maior numero da lista negativa e seu indice", () => {
    const resultado = maiorNumeroNaLista(listaNegativa);
    expect(resultado).to.deep.equals({ maior: -1, indice: 3 });
  });

  it("Juntar listas e ordena-las", () => {
    const resultado = juntarListasOrdenando([lista, listaNegativa]);
    expect(resultado).to.equal([
      -99, -90, -87, -81, -77, -71, -60, -59, -56, -52, -45, -39, -25, -16, -13, -11, -1, 1, 11, 13, 16, 25, 39, 45, 52, 56, 59, 60, 71, 77, 81, 87,
      90, 92, 95, 98, 99,
    ]);
  });

  it("Tirar media da lista", () => {
    const resultado = mediaDasListas([lista]);
    expect(resultado).to.equal(58.35);
  });

  it("Tirar media da lista negativa", () => {
    const resultado = mediaDasListas([listaNegativa]);
    expect(resultado).to.equal(-58.35);
  });

  it("Tirar media da somatorias das listas", () => {
    const resultado = mediaDasListas([lista, listaNegativa]);
    expect(resultado).to.equal(0);
  });
});
