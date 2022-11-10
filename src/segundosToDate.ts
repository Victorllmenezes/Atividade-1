import { match } from "assert";

/**
 * Recebe um valor em segundos e converte para anos, dias, horas, minutos e segundos,
 * assumindo que 1 ano tem 365 dias, 1 dia tem 24 horas, 1 hora tem 60 minutos e 1 minuto tem 60 segundos
 * @param segundos Valor em segundos
 * @returns Objeto com os valores em anos, dias, horas, minutos e segundos
 */
export function SegundosParaEstruturaDeData(segundos: number): { anos: number; dias: number; horas: number; minutos: number; segundos: number } {
  const minutosEmSegundos = 60;
  const horasEmSegundos = minutosEmSegundos * 60;
  const diasEmSegundos = horasEmSegundos * 24;
  const anosEmSegundos = diasEmSegundos * 365;
  console.log("Teste:" + anosEmSegundos);

  return {
    anos: Math.floor(segundos / anosEmSegundos),
    dias: Math.floor((segundos % anosEmSegundos) / diasEmSegundos),
    horas: Math.floor((segundos % diasEmSegundos) / horasEmSegundos),
    minutos: Math.floor((segundos % horasEmSegundos) / minutosEmSegundos),
    segundos: segundos % 60,
  };
}
