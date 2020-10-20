//for loop through the array
//check to see how many times the value is occuring
//see how many pairs there are for each value
//keep adding values of pairs
//make a new array to push the value that we checked
//check to see same value is not checked again
//if not checked run it again
//return total number of pairs per value

n = 7;
ar = [1, 2, 1, 2, 1, 3, 2];

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let alreadyChecked = []; //[1,2]
  let pairCounter = 0; //counting the number

  //for each element find total occurences
  for (let i = 0; i < ar.length; i++) {
    //only check for each element once
    if (alreadyChecked.indexOf(ar[i]) === -1) {
      //how many times each element occurs
      let occurences = ar.filter((val) => val === ar[i]).length;

      // everything is an object
      // even a function is an object
      // functions take in values as inputs
      // functions take in functions as inputs = higher order functions
      // map, filter, reduce = functional programming

      //extract only the integer value after dividing by 2
      let tempPairCount = parseInt(occurences / 2); //1

      pairCounter = tempPairCount + pairCounter; //adding to the pair count /2

      alreadyChecked.push(ar[i]);
    }
  }

  return pairCounter;
}

//calling the function
sockMerchant(n, ar);
