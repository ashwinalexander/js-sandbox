//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

//Given an array nums of integers, return how many of them contain an even number of digits.

//Input: nums = [12,345,2,6,7896]
//Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */

//convert number array to string array
//break up each string into characters
// count characters

let nums = [12, 345, 2, 6, 7896];

let findNumbers = function (nums) {
	return nums.map((val) => val.toString().length).filter((val) => val % 2 === 0)
		.length;
};

console.log(findNumbers(nums));
