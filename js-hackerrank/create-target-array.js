// https://leetcode.com/problems/create-target-array-in-the-given-order/
// 1389. Create Target Array in the Given Order
// Given two arrays of integers nums and index. Your task is to create target array under the following rules:
//     Initially target array is empty.
//     From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
//     Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.
// It is guaranteed that the insertion operations will be valid.
//nums.length == index.length

// nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

//1. create a empty target array
//2. iterate through both the nums array and the index array // for loop
//2. output[i]=nums[i]
//2. output.push
//3. return output

let nums = [0, 1, 2, 3, 4],
	index = [0, 1, 2, 2, 1];

let createTargetArray = function (nums, index) {
	let outputArray = [];

	for (let i = 0; i < nums.length; i++) {
		outputArray.splice(index[i], 0, nums[i]);
	}

	return outputArray;
};

createTargetArray(nums, index);
