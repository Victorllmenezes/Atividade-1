/**
 * Recebe um valor em segundos e converte para anos, dias, horas, minutos e segundos,
 * assumindo que 1 ano tem 365 dias, 1 dia tem 24 horas, 1 hora tem 60 minutos e 1 minuto tem 60 segundos
 * @param segundos Valor em segundos
 * @returns Objeto com os valores em anos, dias, horas, minutos e segundos
 */
export function SegundosParaEstruturaDeData(segundos: number): { anos: number; dias: number; 
  horas: number; minutos: number; segundos: number } {
   const minutos = 60/60
   const horas = 3600/60
   const dias = 86400/24
  const anos = 31536000/365

  return {anos: Math.floor(anos), dias: Math.floor(dias % 24), 
  horas: Math.floor(horas % 24), minutos: Math.floor(minutos % 60), segundos: Math.floor(segundos % 60)}
}
