function destroyer(arr) {
  let firstArray = [...arguments][0];
  let remainingArray = [...arguments].slice(1);

  for (let i = 0; i < remainingArray.length; i++) {
    if (firstArray.indexOf(remainingArray[i]) != -1) {
      firstArray = firstArray.filter((val) => val !== remainingArray[i]);
    }
  }

  return firstArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
