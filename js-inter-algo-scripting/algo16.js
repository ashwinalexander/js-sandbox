function steamrollArray(arr, flatArray = []) {
  arr.forEach((item) => {
    if (Array.isArray(item)) steamrollArray(item, flatArray);
    else {
      flatArray.push(item);
    }
  });
  console.log(flatArray);
  return flatArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
