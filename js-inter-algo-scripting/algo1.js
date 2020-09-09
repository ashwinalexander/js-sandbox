//Intermediate Algorithm Scripting: Sum All Numbers in a RangePassed

function sumAll(arr) {
  let sortedArray = arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });

  let newArr = [];
  for (let i = sortedArray[0]; i <= sortedArray[1]; i++) {
    newArr.push(i);
  }

  return newArr.reduce((sum, val) => sum + val, 0);
}

console.log(sumAll([1, 4]));
