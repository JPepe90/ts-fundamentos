// Librerias que soportan TypeScript
import { subDays, format } from 'date-fns';

const nuevaFecha = subDays(new Date(2000, 1, 20), 10); // 1 = febrero

const str = format(nuevaFecha, 'dd/MM/yyyy');
console.log(str);
