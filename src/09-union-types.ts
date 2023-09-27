(() => {
  let myDynamicVar: string | number; // sirve para acotar el tipo de dato
  myDynamicVar = 12;
  myDynamicVar = 'hola';

  // en funciones
  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      // si entra me da todas las opciones de los string
      console.log(`Aca tengo un string ${myText.toUpperCase()}`);
    } else {
      // si entra me da todas las opciones de los number
      console.log(`Aca tengo un numero ${myText.toFixed(1)}`);
    }
  }
  greeting('asa');
  greeting(555.6324);

})();
