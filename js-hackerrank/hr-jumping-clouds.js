// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  //   const splitArray = c.split("\n");
  //   const clouds = splitArray[1];
  //   const newClouds = [...clouds].filter((val) => val !== " ");
  const newClouds = c;
  let jumpCounter = 0;

  for (let i = 0; i < newClouds.length - 2; i++) {
    newClouds[i + 2] === 1 ? (i = i + 0) : (i = i + 1);

    jumpCounter++;
  }
  console.log(jumpCounter);
  return jumpCounter;
}

let c = "0,0,0,1,0,0";

//pseudocode

//1.set a jump counter
//2.extract the string
//3.make it into an array
//4.loop through array, for each element, peek two steps ahead,
//5.if value == 1, set index to +1, increment jumpcounter
//6.if value ==0, set index to +2,increment jumpcounter
//7. return jumpcounter

jumpingOnClouds(c);
