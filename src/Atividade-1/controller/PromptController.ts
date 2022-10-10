const prompt = require("readline-sync");
/**
 * Mostra uma mensagem no prompt de comando.
 * @param mensagem Texto a ser mostrado.
 */
export function MostrarMensagem(mensagem: string): void {
  console.log(mensagem);
}

/**
 * Pergunta algo no prompt de comando.
 * @param pergunta Texto com pergunta a ser realizada.
 * @returns Retorna uma string
 */
export function Perguntar(pergunta: string): string {
  return prompt.question(pergunta);
}

/**
 * Pergunta um número no prompt de comando.
 * @param pergunta Texto com pergunta a ser realizada.
 * @returns Retorna um number ou undefined em caso de aborto
 */
export function PerguntarNumero(pergunta: string): number | undefined {
  const respostaTexto = Perguntar(pergunta);
  const temResposta = true; // Implementar validação se tem resposta ou se foi respondido vazio.

  if (temResposta) {
    //Validar se é um numero e retornar o mesmo.
    //Caso não seja um numero, levantar um erro com uma mensagem informando.
  } else return undefined;
}
