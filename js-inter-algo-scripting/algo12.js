//Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  //initialising
  let prevFib = 1;
  let nextFib = 1;
  let oddArr = [prevFib, nextFib];

  while (oddArr[oddArr.length - 1] <= num) {
    let newestFib = prevFib + nextFib;
    prevFib = nextFib;
    nextFib = newestFib;

    if (nextFib % 2 !== 0) {
      oddArr.push(nextFib);
    }
  }
  oddArr.pop();

  return oddArr.reduce((accumulator, val) => accumulator + val);
}

console.log(sumFibs(75025));
