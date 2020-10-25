//input
let nums = [8, 1, 2, 2, 3];

//1 iterate through the nums array
//2 let tempcounter = 0;
//3 compare each array element with all the other array elements, if larger, increment tempcounter

let smallerNumbersThanCurrent = function (nums) {
	let outputArray = [];
	let tempCounter;

	for (let i = 0; i < nums.length; i++) {
		//8
		//1
		tempCounter = 0;

		//compare our element with all the other array elements
		//if greater, increment tempcounter
		//if equal or lesser, do nothing
		for (let j = 0; j < nums.length; j++) {
			//8 with 8, 1, 2, 2, 3
			if (nums[i] > nums[j]) {
				tempCounter = tempCounter + 1;
			}
		}

		outputArray.push(tempCounter); //[4]
	}
	console.log(outputArray);

	return outputArray;
};

smallerNumbersThanCurrent(nums);
