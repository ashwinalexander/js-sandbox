//    https://leetcode.com/problems/increasing-decreasing-string/
//    Given a string s. You should re-order the string using the following algorithm:
//     Pick the smallest character from s and append it to the result.
//     Pick the smallest character from s which is greater than the last appended character to the result and append it.
//     Repeat step 2 until you cannot pick more characters.
//     Pick the largest character from s and append it to the result.
//     Pick the largest character from s which is smaller than the last appended character to the result and append it.
//     Repeat step 5 until you cannot pick more characters.
//     Repeat the steps from 1 to 6 until you pick all characters from s.
//     In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.
//     Return the result string after sorting s with this algorithm.

let s = "ggggggg";

let sortString = function (s) {
	let asciiConverter = function (asciiArray) {
		return asciiArray
			.map((val) => String.fromCharCode(val))
			.reduce((finalResult, val) => finalResult + val);
	};

	let spreadS = [...s].map((val) => val.charCodeAt(0)); //ascii equivalent of the string

	let filteredArray = [];
	let resultArray = [];

	let uniqueValues = [];

	for (let i = 0; i < spreadS.length; i++) {
		if (uniqueValues.indexOf(spreadS[i]) === -1) {
			uniqueValues.push(spreadS[i]);
		}
	}

	for (let i = 0; i < s.length; i++) {
		if (resultArray.length !== s.length) {
			filteredArray = [...spreadS];
			for (let j = 0; j < uniqueValues.length; j++) {
				if (filteredArray.length > 0) {
					let minVal = Math.min(...filteredArray); //97
					resultArray.push(minVal);
					spreadS.splice(spreadS.indexOf(minVal), 1);

					filteredArray = filteredArray.filter((val) => val !== minVal);
				}
			}

			filteredArray = [...spreadS];
			for (let k = 0; k < uniqueValues.length; k++) {
				if (filteredArray.length > 0) {
					let maxVal = Math.max(...filteredArray);
					resultArray.push(maxVal);
					spreadS.splice(spreadS.indexOf(maxVal), 1);
					filteredArray = filteredArray.filter((val) => val !== maxVal);
				}
			}
		}
	}

	return asciiConverter(resultArray);
};

sortString(s);
