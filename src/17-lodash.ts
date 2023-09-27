// Librerias que no soportan TypeScript nativamente
/*
  en estos casos se debe ver las sugerencias de VSCode porque existe desarrollos
  paralelos para trabajar con sistemas de tipados. para el caso de lodash
  fue necesario instalar un agregado: npm i --save-dev @types/lodash
*/
import _ from 'lodash';

const data = [
  {
    username: 'javier',
    role: 'admin'
  },
  {
    username: 'jose',
    role: 'seller'
  },
  {
    username: 'maria',
    role: 'customer'
  },
  {
    username: 'romina',
    role: 'seller'
  },
];

const agrupamiento = _.groupBy(data, (item) => item.role);
console.log(agrupamiento);
