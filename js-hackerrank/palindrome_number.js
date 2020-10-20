// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //not a palindrome
  if (x < 0) {
    return false;
  }

  let strNum = x.toString();
  let arrNum = [...strNum];

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] !== arrNum[arrNum.length - 1 - i]) {
      return false;
    } else {
    }
  }
  return true;
};

let x = -113311;
console.log(isPalindrome(x));
