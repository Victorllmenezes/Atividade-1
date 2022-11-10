/**
 * Recebe um valor em segundos e converte para anos, dias, horas, minutos e segundos,
 * assumindo que 1 ano tem 365 dias, 1 dia tem 24 horas, 1 hora tem 60 minutos e 1 minuto tem 60 segundos
 * @param segundos Valor em segundos
 * @returns Objeto com os valores em anos, dias, horas, minutos e segundos
 */
export function SegundosParaEstruturaDeData(segundos: number): { anos: number; dias: number; horas: number; minutos: number; segundos: number } {
  return {
    anos: Math.floor(segundos / 3.154e7),
    dias: Math.floor((segundos % 3.154e7) / 86400),
    horas: Math.floor((segundos % 86400) / 3600),
    minutos: Math.floor((segundos % 3600) / 60),
    segundos: segundos % 60,
  };
}
