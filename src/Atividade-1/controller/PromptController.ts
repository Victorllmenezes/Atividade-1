const prompt = require("readline-sync");

export function MostrarMensagem(mensagem: string): void {
  console.log(mensagem);
}

export function Perguntar(pergunta: string): string {
  return prompt.question(pergunta);
}

export function PerguntarNumero(pergunta: string): number | undefined {
  const respostaTexto = Perguntar(pergunta);
  const temResposta = respostaTexto.trim() != "";

  if (temResposta) {
    const retorno = parseFloat(respostaTexto);
    if (isNaN(retorno)) throw Error("O valor inserido não é um número!");
    else return retorno;
  } else return undefined;
}
