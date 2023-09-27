(() => {
  let myNumber: number;
  let myString: String;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }
  hi('Javier');
  hi(null);

  function hi2(name: string | null) {
    let hello = 'Hola ';
    // hello += name ? name.toLocaleLowerCase() : 'nobody'; // funciona
    hello += name?.toLowerCase() || 'nobody'; // optional chainning
    console.log(hello);
  }
  hi2('Javier');
  hi2(null);
})();
