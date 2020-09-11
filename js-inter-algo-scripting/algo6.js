function translatePigLatin(str) {
  let vowelIndex = str.search(/([aeiou])/);

  vowelIndex === 0
    ? (str = str + "way")
    : vowelIndex === -1
    ? (str = str + "ay")
    : (str = str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay");

  return str;
}
//split string into two sections - based on where first vowel is at
//if array has two parts,
// second part + first part + ay
// else first part + way
console.log(translatePigLatin("glove"));
