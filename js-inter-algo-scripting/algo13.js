function sumPrimes(num) {
  let checkPrime = (val) => {
    if (val == 1) {
      return false;
    } else if (val === 2 || val === 3) {
      return true;
    } else {
      for (let i = 2; i <= Math.sqrt(val); i++) {
        if (val % i === 0) {
          return false;
        }
      }
      return true;
    }
  };

  let counter = 0;
  for (let j = 0; j <= num; ++j) {
    if (checkPrime(j)) {
      counter = counter + j;
    }
  }
  return counter;
}

console.log(sumPrimes(10));
