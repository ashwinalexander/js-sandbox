//Intermediate Algorithm Scripting: Search and Replace
//Perform a search and replace on the sentence using the arguments provided and return the new sentence.

function myReplace(str, before, after) {
  //check case of the first letter of before
  let isUpper = /^[A-Z]/.test(before.charAt(0));

  //extract first character, extract all the other characters
  let firstAfter = after.charAt(0);
  let restAfter = after.slice(1);

  isUpper
    ? (after = firstAfter.toUpperCase() + restAfter)
    : (after = firstAfter.toLowerCase() + restAfter);

  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped")
);
