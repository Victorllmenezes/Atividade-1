const prompt = require("readline-sync");

let numero: any;
let listaDeNumeros: any = [];
let resultadoDaMultiplicação = 1;
let numeroDivisor;
let resultadoFinal;
let adicionarNumero: any;
let escolhaDoUsuario: any = true;

function validador(index: any) {
  listaDeNumeros.push(numero);
  index = isNaN(index);
  if (index == false) {
  } else {
    switch (numero) {
      case "e":
        listaDeNumeros.pop();
        break;

      default:
        console.log("Nao eh um numero!!");
        listaDeNumeros.pop();
        break;
    }
  }
}

//Receber input de n números no terminal.

while (escolhaDoUsuario == true) {
  numero = prompt.question("Digite um numero ou (e) para sair: ");
  validador(numero);
  if (numero == "e" || numero == "E") {
    escolhaDoUsuario = false;
  } else {
  }
}

//Multiplicar todos os números.
for (let index = 0; index < listaDeNumeros.length; index++) {
  resultadoDaMultiplicação = resultadoDaMultiplicação * listaDeNumeros[index];
}

//Mostrar números no terminal.
console.log(listaDeNumeros);

//Receber input de 1 numero no terminal.
do {
  numeroDivisor = prompt.question("Digite um numero divisor: ");
  if (numeroDivisor == 0) {
    console.log("Impossivel dividir por 0");
  } else {
    //Dividir o resultado anterior pelo número inserido.
    resultadoFinal = resultadoDaMultiplicação / numeroDivisor;
  }
} while (numeroDivisor == 0);

//Mostrar resultado no terminal.
console.log(resultadoFinal);

// Receber input de n números no terminal.
//Loop com uma saida
//Perguntar numero
//Validar o numero
//Armazenar o numero
//Fim do loop

// Multiplicar todos os números.
//Percorrer a lista multiplicando valores

// Mostrar números no terminal.

// Receber input de 1 numero no terminal.
//Perguntar numero
//Validar o numero
//Armazenar o numero

// Dividir o resultado anterior pelo número inserido.

// Mostrar resultado no terminal.
