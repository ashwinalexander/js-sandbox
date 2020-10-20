/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

//32bit integer  = -2147483648  and 2147483647

//64bit much bigger number than a 32 bit number

let num = 100;
let str = "sssss";

// String
// Number  <<<
// null
// undefined
// boolean
// symbol

-2 ^ (31 - 2) ^ 31;

2147483648;

function countingValleys(steps, path) {
  let isValley = false;
  let valleyCounter = 0;
  let tempCounter = 0;
  let arrTrav = [...path];

  for (let i = 0; i < arrTrav.length; i++) {
    tempCounter <= 0 ? (isValley = true) : (isValley = false);

    arrTrav[i] === "D"
      ? (tempCounter = tempCounter - 1)
      : (tempCounter = tempCounter + 1);

    if (isValley && tempCounter == 0) {
      valleyCounter++;
    }
  }

  return valleyCounter;
}

countingValleys(8, "DDUUUUDD");
