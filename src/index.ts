import * as readline from 'readline'

class EValorInvalido extends Error { }
class EAbortarOperacao extends Error { }
class EImpossivelDividirPorZero extends Error { }

class ManipuladorEntrada {
  private static interface = readline.createInterface({ input: process.stdin, output: process.stdout });

  static async Questao(mensagem: string, manipulador: (valor: number) => Promise<number>): Promise<number> {
    return new Promise((resolve, reject) => this.interface.question(mensagem, (valorDigitado) => {
      if (valorDigitado.trim() === '')
        reject(new EAbortarOperacao());
      else {
        const valor = parseFloat(valorDigitado);
        if (isNaN(valor)) reject(new EValorInvalido());
        else resolve(manipulador(valor));
      }
    }));
  }

  static async QuestaoRetry(mensagem: string, validador: (valor: number) => boolean, onInvalido: (valor: number) => void): Promise<number> {
    try {
      return await ManipuladorEntrada.Questao(mensagem, async (valor) => {
        if (validador(valor)) return valor;
        else {
          onInvalido(valor);
          return this.QuestaoRetry(mensagem, validador, onInvalido);
        }
      });
    } catch (e) {
      if (e instanceof EValorInvalido) {
        console.log('Valor digitado inválido');
        return this.QuestaoRetry(mensagem, validador, onInvalido);
      } else throw e;
    }
  }

  private static async _questaoLoop(mensagem: string, manipulador: (valor: number) => Promise<number>, lista: number[]): Promise<number[]> {
    try {
      lista.push(await manipulador(await this.QuestaoRetry(mensagem, () => true, () => { })));
      return this._questaoLoop(mensagem, manipulador, lista);
    } catch (e) {
      if (e instanceof EAbortarOperacao) return lista;
      else throw e;
    }
  }

  static async QuestaoLoop(mensagem: string, manipulador: (valor: number) => Promise<number>): Promise<number[]> {
    return this._questaoLoop(mensagem, manipulador, []);
  }

  static Fechar() {
    this.interface.close();
  }
}

async function main() {
  const numeradores = await ManipuladorEntrada.QuestaoLoop('Digite um valor: ', async (valor) => valor);

  console.log(`Valores digitados: ${numeradores}`);
  const produto = numeradores.reduce((valorAnterior, valorAtual) => valorAnterior * valorAtual, 1);
  console.log(`O produto é ${produto}`);

  try {
    const denominador = await ManipuladorEntrada.QuestaoRetry('Digite o denominador: ', (valor) => valor !== 0, () => console.log('Impossível dividir por zero.'));
    console.log(`O resultado é ${produto / denominador}.`);
  } catch (e) { if (e instanceof EAbortarOperacao) console.log('Operação abortada!') }

  ManipuladorEntrada.Fechar();
}

main();