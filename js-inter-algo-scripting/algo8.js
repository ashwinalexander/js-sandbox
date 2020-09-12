//Intermediate Algorithm Scripting: DNA Pairing
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
  function returnPair(char) {
    switch (char) {
      case "A":
        return ["A", "T"];

      case "T":
        return ["T", "A"];

      case "G":
        return ["G", "C"];

      case "C":
        return ["C", "G"];

      default:
        return ["-"];
    }
  }

  let dnaStrands = str.split("").map(returnPair);
  return dnaStrands;
}
