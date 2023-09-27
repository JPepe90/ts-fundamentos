(() => {
  type UserID = string | number | boolean; // defino un tipo personalizado (alias type)
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes; // nos permite acotar mas el conjunto de valores!
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
  shirtSize = 'XL';
  // shirtSize = 'asda'; // tira error!

  function greeting(userId: UserID, size: Sizes) {
    if(typeof userId === 'string') {
      // si entra me da todas las opciones de los string
      console.log(`Aca tengo un string ${userId.toUpperCase()}`);
    }
  }
  greeting('asa', 'L');
  // greeting('asa', 'Lasda'); // error!
})();
