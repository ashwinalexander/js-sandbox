//let nums = [1, 2, 3, 1, 1, 3];
let nums = [1, 2, 3];

let numIdenticalPairs = function (nums) {
	let counter = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] == nums[j]) {
				counter++;
			}
		}
	}
	console.log(counter);
	return counter;
};

numIdenticalPairs(nums);
