function smallestCommons(arr) {
  //sort this array
  let newArr = arr.sort((a, b) => a - b);
  let min = newArr[0];
  let max = newArr[1];

  //create a check function
  function checkIfDivisible(min, max, num) {
    for (let i = min; i < max; i++) {
      if (num % i !== 0) {
        return false;
      }
    }
    return true;
  }

  let maxMultiple = max;

  while (!checkIfDivisible(min, max, maxMultiple)) {
    maxMultiple = maxMultiple + max;
  }
  console.log(maxMultiple);
  return maxMultiple;
}

//pass values into check function >>

smallestCommons([1, 3]);
