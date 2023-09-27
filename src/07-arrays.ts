(() => {
  let prices = [1, 2, 3, 3, 2, 5, 12, 1, 7];
  // prices.push('asda') // error
  // prices.push(true) // error
  // prices.push({}) // error
  prices.push(4);
  console.log('prices', prices);

  let pricesNew = [1, 4, 6, 3, true, 'hola']; // puedo pushear cualquiera de los 3 tipos

  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(122); // success! porque lo defini explicitamente

  // let words = ['as', 'iu'];
  // words.map(item => item * 2) // error por tipo de operacion aritmetica
})();
