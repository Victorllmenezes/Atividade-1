import { isNumber } from "util";

const prompt = require("readline-sync");

function ValidarResposta(resposta: string): boolean {
  if (resposta) {
    console.log(isNumber(resposta));

    return false;
  } else {
    return true;
  }
}

function PerguntarNumero(pergunta: string): number {
  const resposta: string = prompt.question(pergunta);

  if (ValidarResposta(resposta)) {
    return parseFloat(resposta);
  } else {
    return 0;
    //throw new Error("Function not implemented.");
  }
}

let controle: boolean = true;
const listaDeNumeros: number[] = [];

while (controle) {
  listaDeNumeros.push(PerguntarNumero("Digite um numero: "));
  console.log(listaDeNumeros);
}
