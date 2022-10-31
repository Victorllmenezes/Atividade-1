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
  const temResposta = respostaTexto.trim() != "";

  if (temResposta) {
  const respostaNumero = parseInt(respostaTexto); 

  //Validar se é um numero e retornar o mesmo.
  if (isNaN(respostaNumero)) {

   throw new Error("Número inválido")
   
  //Caso não seja um numero, levantar um erro com uma mensagem informando.
} else return respostaNumero;
}else return undefined
 
  
}
