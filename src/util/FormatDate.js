import { formatDistance, fromUnixTime } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export default function (date, now) {
  return formatDistance(new Date(fromUnixTime(date)), now, { locale: pt });
}
