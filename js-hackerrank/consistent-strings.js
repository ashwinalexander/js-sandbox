//https://leetcode.com/problems/count-the-number-of-consistent-strings/
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

let allowed = "ab",
	words = ["ad", "bd", "aaab", "baa", "badab"];

let countConsistentStrings = function (allowed, words) {
	let allowedCharacters = [...allowed]; //each allowed character
	let testWordArray = [...words]; //all the test words

	let numConsistentStrings = testWordArray.filter((val) =>
		isConsistentString(val, allowedCharacters)
	).length;

	return numConsistentStrings;

	//if testWord contains ONLY allowedCharacters return true
	//else returns false
	function isConsistentString(testWord, allowedCharacters) {
		let wordCharacters = [...testWord]; //each character in the test word

		for (let i = 0; i < wordCharacters.length; i++) {
			if (allowedCharacters.indexOf(wordCharacters[i]) === -1) {
				//this is not a consistent string
				return false;
			}
		}

		//this is a consistent string
		return true;
	}
};

console.log(countConsistentStrings(allowed, words));
