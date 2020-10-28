// //https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

let longestCommonPrefix = function (strs) {
	let matchString = "";
	let newArr = strs.map((val) => [...val]);

	//return an empty string if there's one or 0 inputs
	if (newArr.length == 0) {
		return matchString;
	}

	if (newArr.length == 1) {
		return strs[0];
	}

	for (let i = 0; i < newArr[0].length; i++) {
		for (let j = 1; j < newArr.length; j++) {
			if (newArr[j][i] != newArr[0][i]) {
				return matchString;
			}
		}
		matchString += newArr[0][i];
	}

	return matchString;
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
