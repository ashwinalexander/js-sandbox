// Given an array nums.
//We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

let nums = [1, 2, 3, 4];

let runningSum = function (nums) {
  let outputArray = [];
  1, 3, 6, 10; //sum+1,sum+2,sum+3,sum+4
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    //counter = 0,1
    //nums[i] = 1,2
    outputArray.push(sum + nums[i]);

    1 = 0 + 1;
    sum = sum + nums[i];
  }

  return outputArray;
};

console.log(runningSum(nums));
