(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach(item => {
      total += item;
    });
    return total.toString();
  }

  // void explicita que la funcion no devuelve nada
  // si no lo pongo y la funcion no tiene retorno, se infiere
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  printTotal([4, 6, 2, 3, 7, 4, 1]);

})();
