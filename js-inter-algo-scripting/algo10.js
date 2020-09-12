//Intermediate Algorithm Scripting: Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function uniteUnique(arr) {
  let finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    finalArray = finalArray.concat(arguments[i]);
  }

  let weedOutDuplicates = (fullArray) => {
    for (let i = 0; i < fullArray.length; i++) {
      let checkIndex = fullArray.indexOf(fullArray[i], i + 1);
      let removeThis = fullArray[i];
      if (checkIndex != -1) {
        fullArray = fullArray.filter((val) => val !== removeThis);
        fullArray.splice(i, 0, removeThis);
      }
    }

    return fullArray;
  };
  return weedOutDuplicates(finalArray);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
