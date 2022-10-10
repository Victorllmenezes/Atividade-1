import { MultiplicarValores } from "./controller/MathController";
import { MostrarMensagem, PerguntarNumero } from "./controller/PromptController";

function MensagemInicial(): void {
  MostrarMensagem("\n Bem vindo a Atividade-1! Digite os numeradores e denominadores para ver o resultado da divisão. \n");
}

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

function NovaListaNumeros(mensagemInsercao: string): number[] {
  let lista: number[] = [];
  PerguntarNumerosParaLista(mensagemInsercao, lista);
  return lista;
}

function Atividade1(): void {
  MensagemInicial();
  const listaNumeradores: number[] = NovaListaNumeros("Insira um numerador: ");

  if (listaNumeradores.length > 0) {
    const numerador = MultiplicarValores(listaNumeradores);
    MostrarMensagem("\nO numerador é " + numerador.toString() + "\n");
    if (numerador !== 0) {
      let listaDenominadores: number[] = NovaListaNumeros("Insira um denominador: ");
      const denominador = MultiplicarValores(listaDenominadores);

      if (denominador !== 0) {
        MostrarMensagem("\n" + numerador.toString() + "/" + denominador.toString() + " = " + numerador / denominador + "\n");
      } else throw MostrarMensagem("\nNão é possivel dividir por 0! :(\n");
    } else MostrarMensagem("Independente do denominador o resultado sempre será = 0");
  } else MostrarMensagem("\nNenhum numerador inserido! :(\n");
}

export default Atividade1;
