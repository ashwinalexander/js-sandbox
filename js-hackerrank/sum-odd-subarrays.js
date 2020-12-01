//https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

//get all the odd numbers before and upto that array length (1,3,5)
//temp counter which increments with the sum of each subarray sum
//using these numbers, generate subarrays and also find the sum of integers in these subarrays and add that to a counter

let arr = [1, 4, 2, 5, 3];
var sumOddLengthSubarrays = function (arr) {
	let sum = 0;

	for (let i = 1; i <= arr.length; i = i + 2) {
		for (let j = 0; j < arr.length; j++) {
			//arr.length - subarray.length
			if (j <= arr.length - i) {
				let temp = arr.slice(j, j + i);
				sum += temp.reduce((val, acc) => acc + val);
			}
		}
	}
	console.log(sum);
	return sum;
};

sumOddLengthSubarrays(arr);
