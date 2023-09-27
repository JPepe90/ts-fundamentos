// inferencia en funcion anonima autoejecutada
(() => {
  let myProductName = 'Product 1'; // variable ya utilizada en otro codigo no tira error por el scope de la funcion
  let myProductPrice = 100; // variable ya utilizada en otro codigo no tira error por el scope de la funcion
})();

