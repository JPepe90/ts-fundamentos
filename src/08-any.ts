/*
  Suele utilizarse de forma incremental en el desarrollo de codigo
  y migracion. Se debe usar con mucho cuidado.

  En equipos maduros no se recomienda usar any.
*/

(() => {
  let myDynamicVar: any;  // puede ser cualquier tipo.
  myDynamicVar = 123;
  myDynamicVar = {};

  myDynamicVar = 'hola';

  // Cast
  const rtaStr = (myDynamicVar as string).toLocaleLowerCase();  // cast to string
  console.log('string rta:', rtaStr);

  myDynamicVar = 320;
  const rtaNum = (<number>myDynamicVar).toFixed();  // cast to number
  console.log('number rta:', rtaNum);
})();
