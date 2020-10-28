//https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

//4:36

//1. spread the string so we get its characters
//2. create temp array - which keeps track of unclosed brackets
//3. iterate through each array value.
//4. If open, add to temp array,
//5. If closed, it must be the one added most recently,
//6  else return false
//7  finally, RETURN TRUE

let s = "()[{()}{}}]";
let isValid = function (s) {
	let allBrackets = [...s];
	let unclosedBrackets = [];

	let bracketPairs = {
		"{": "}",
		"(": ")",
		"[": "]",
	};

	//iterate through the array values
	for (let i = 0; i < allBrackets.length; i++) {
		//is the array value an opening bracket, then add it to the temp array
		if (Object.keys(bracketPairs).indexOf(allBrackets[i]) != -1) {
			unclosedBrackets.push(allBrackets[i]);
		}

		//if the array value is a closing bracket, then remove it to the temp array if it was most recently added
		if (Object.values(bracketPairs).indexOf(allBrackets[i]) != -1) {
			if (
				allBrackets[i] ==
				bracketPairs[unclosedBrackets[unclosedBrackets.length - 1]]
			) {
				unclosedBrackets.pop();
			} else {
				return false;
			}
		}
	}

	return unclosedBrackets.length > 0 ? false : true;
};

console.log(isValid(s));
