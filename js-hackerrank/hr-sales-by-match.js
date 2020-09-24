n = 7;
ar = [1, 2, 1, 2, 1, 3, 2];

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let alreadyChecked = [];
  let pairCounter = 0;

  //for each element find total occurences
  for (let i = 0; i < ar.length; i++) {
    //only check for each element once
    if (alreadyChecked.indexOf(ar[i]) === -1) {
      //how many times each element occurs
      let occurences = ar.filter((val) => val === ar[i]).length;

      //extract only the integer value after dividing by 2
      let tempPairCount = parseInt(occurences / 2);

      pairCounter += tempPairCount; //adding to the pair count

      alreadyChecked.push(ar[i]);
    }
  }
  return pairCounter;
}

//calling the function
sockMerchant(n, ar);
