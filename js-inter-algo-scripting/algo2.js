//Intermediate Algorithm Scripting: Diff Two Arrays

function diffArray(arr1, arr2) {
  let newArr = [];

  arr1.map((val) => (arr2.indexOf(val) === -1 ? newArr.push(val) : 1));
  arr2.map((val) => (arr1.indexOf(val) === -1 ? newArr.push(val) : 1));

  return newArr;
}

//testing
diffArray([1, 2, 3, "howuse", 5], [1, 2, 3, 4, 5]);
