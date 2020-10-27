// https://leetcode.com/problems/split-a-string-in-balanced-strings/

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

let s = "RLRRLLRLRL";

let balancedStringSplit = (s) => {
	let arrString = [...s];

	let rCounter = 0;
	let lCounter = 0;
	let counter = 0;

	for (let i = 0; i < arrString.length; i++) {
		if (arrString[i] === "L") {
			lCounter = lCounter + 1;
		}

		if (arrString[i] === "R") {
			rCounter = rCounter + 1;
		}

		if (rCounter == lCounter) {
			counter++;
		}
	}
	console.log(counter);
	return counter;
};

balancedStringSplit(s);
