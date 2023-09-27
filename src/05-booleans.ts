(() => {
  let isEnable = true;
  isEnable = false;
  console.log('isEnable', isEnable);

  let isNew: boolean = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false; // if simplificado en una linea
  console.log('isNew', isNew);
})();
