//Intermediate Algorithm Scripting: Missing letters
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

function fearNotLetter(str) {
  function peekAhead(val, array) {}

  if (str.length > 1) {
    let counter = str.charCodeAt(0);

    for (let i = 1; i < str.length; i++) {
      if (str.charCodeAt(i) === counter + 1) {
        //they match as expected, increment the counter
        counter = str.charCodeAt(i);
      } else {
        return String.fromCharCode(counter + 1);
      }
    }
  } else {
    return "string not large enough";
  }
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
