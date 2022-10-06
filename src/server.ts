const prompt = require("readline-sync");

let quantidadeDeNumeros: number = prompt.question(
  "Digite a quantidade de numeros que deseja inserir: "
);

let Numero = 1;
let resultadoDaMultiplicação = 1;
let sequenciaDeNumeros = [];

for (let contador = 0; contador < quantidadeDeNumeros; contador++) {
  Numero = prompt.question("Digite um numero: ");
  sequenciaDeNumeros.push(Numero);
  resultadoDaMultiplicação = resultadoDaMultiplicação * Numero;
}

console.log(sequenciaDeNumeros);

let numeroDivisor = prompt.question("Digite um numero divisor: ");

resultadoDaMultiplicação = resultadoDaMultiplicação / numeroDivisor;

console.log(resultadoDaMultiplicação);
