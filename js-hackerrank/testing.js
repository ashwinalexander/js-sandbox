let num = [3, 2, 4];
let target = 6;

//3+3,3+2,3+4
//2+3,2+2,2+4
//4+3,4+2,4+4

let blah = (num, target) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (i !== j) {
        if (num[i] + num[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

blah(num, target);
