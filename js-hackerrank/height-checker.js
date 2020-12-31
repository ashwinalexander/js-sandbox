//https://leetcode.com/problems/height-checker/
// Students are asked to stand in non-decreasing order of heights for an annual photo.
// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.
// Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

// Example 2:
// Input: heights = [5,1,2,3,4]
// Output: 5

// Example 3:
// Input: heights = [1,2,3,4,5]
// Output: 0

//create a new array and sort the elements
//compare the two arrays - for each element, if they match, don't increment counter
//else increment counter

let heights = [1, 2, 3, 4, 5];

let heightChecker = function (heights) {
	let originalArray = heights.map((val) => val); //copy the original array 
	let sortedArray = heights.sort((a, b) => a - b); //sorted 

	let counter = 0;

	for (let i = 0; i < originalArray.length; i++) {
		if (originalArray[i] !== sortedArray[i]) {
			counter = counter + 1;
		}
	}

	return counter;
};

heightChecker(heights);
