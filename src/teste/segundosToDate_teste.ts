import { expect } from "chai";
import { SegundosParaEstruturaDeData } from "../segundosToDate";

describe("Teste atividade segundos para data", () => {
  it("Converter o numero 148558 em segundos para estrutura de data", () => {
    const resultado = SegundosParaEstruturaDeData(148558);
    expect(resultado).to.deep.equal({ anos: 0, dias: 1, horas: 17, minutos: 15, segundos: 58 });
  });
});
