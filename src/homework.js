(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /*                      First excercise 
  let multipliedNumbers = numbers.map(number => number * 5);
  console.log(multipliedNumbers);

  */

   //.......................................................................................................................




  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /*                    Second excercise 
  let indexedNames = names.map((name, index) => ({ name, index }));
  indexedNames.sort((a, b) => a.name.localeCompare(b.name));
  let sortedNames = indexedNames.map(item => item.name);
  console.log(sortedNames);

  
  */

    //.......................................................................................................................
  

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /*                    Thrid excercise 
  const uniqueData = data.filter((item, index) => data.indexOf(item) === index);
  console.log(uniqueData);

  
  */
  //.......................................................................................................................


  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /*                    Fourth excercise 
  const letterCount = {};

  for (let i = 0; i < largeWord.length; i++) {
      const letter = largeWord[i];
      
      if (letterCount[letter]) {
          letterCount[letter]++;
      } else {
          letterCount[letter] = 1;
      }
  }

  Object.entries(letterCount).forEach(([letter, count]) => {
      console.log(`${letter}: ${count}`);
  });

  */
})();
  //.......................................................................................................................