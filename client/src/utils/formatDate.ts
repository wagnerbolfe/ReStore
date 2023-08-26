import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale'

export function formatDate(date: string) {
  const firstDate = parseISO(date);
  return format(firstDate, "dd 'de' MMMM', às ' HH:mm'h'", { locale: ptBR });
}