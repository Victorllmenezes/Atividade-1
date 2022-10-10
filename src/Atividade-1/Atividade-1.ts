import { MultiplicarValores } from "./controller/MathController";
import { MostrarMensagem, PerguntarNumero } from "./controller/PromptController";

/**
 * Pergunta e adiciona numeros a uma lista.
 * @param pergunta Texto com pergunta a ser realizada.
 * @param lista Lista para adicionar os números.
 */
function PerguntarNumerosParaLista(pergunta: string, lista: number[]) {
  let perguntando = true;
  while (perguntando) {
    try {
      const resposta = PerguntarNumero(pergunta);
      if (resposta != undefined) lista.push(resposta);
      else perguntando = false;
    } catch (erro) {
      if (erro instanceof Error) MostrarMensagem(erro.message);
    }
  }
}

/**
 * Cria e retorna nova uma nova lista de números inseridos por um usuário.
 * @param mensagemInsercao Texto com pergunta a ser realizada a cada número.
 * @returns
 */
function NovaListaNumeros(mensagemInsercao: string): number[] {
  let lista: number[] = [];
  PerguntarNumerosParaLista(mensagemInsercao, lista);
  return lista;
}

function Atividade1(): void {
  //1. Receber input de n números no terminal.
  const listaNumeradores: number[] = NovaListaNumeros("Insira um numerador: ");
  //2. Multiplicar todos os números.
  const numerador = MultiplicarValores(listaNumeradores);
  //3. Mostrar números no terminal.
  MostrarMensagem(numerador.toString());
  //4. Receber input de n números no terminal.
  const listaDenominadores: number[] = NovaListaNumeros("Insira um denominador: ");
  const denominador = MultiplicarValores(listaDenominadores);
  //5. Dividir o resultado anterior pelo número inserido.
  const resultado = numerador / denominador;
  //6. Mostrar resultado no terminal.
  MostrarMensagem("O resultado é " + resultado);
}

export default Atividade1;
