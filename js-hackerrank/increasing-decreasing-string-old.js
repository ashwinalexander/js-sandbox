//https://leetcode.com/problems/increasing-decreasing-string/

// Given a string s. You should re-order the string using the following algorithm:
//     Pick the smallest character from s and append it to the result.
//     Pick the smallest character from s which is greater than the last appended character to the result and append it.
//     Repeat step 2 until you cannot pick more characters.
//     Pick the largest character from s and append it to the result.
//     Pick the largest character from s which is smaller than the last appended character to the result and append it.
//     Repeat step 5 until you cannot pick more characters.
//     Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.
// Return the result string after sorting s with this algorithm.

//initialise a new string which will be result
//spread s into an array [a,a,a,a,b,b,b,b,c,c,c,c]
//convert each character to its ascii value [69,69,69,69,70,70,70,70,71,71,71,71]
//result array = [69,70,71,71,69,60]
//a,b,c,c,b,a
//every operation, remove character from s and add to new string.

//converts character to ASCII
//"ABC".charCodeAt(0)

let s = "aaaabbbbcccc";

let sortString = function (s) {
	//spread and convert to ascii - we now have ASCII values in an array
	let spreadedS = [...s].map((val) => val.charCodeAt(0));
	let filteredArray = [...s].map((val) => val.charCodeAt(0));

	//stores the final resulting array (but in ASCII form)
	let resultASCIIarray = [];
	let tempLastAppendedASCIICharacter = 96; //ASCII value BEFORE a

	//step 1: find the smallest value, save it into new array, remove the value ONCE from old array, remove it ALL the times from the filtered array
	//[97,97,97,98,98,98,98,99,99,99,99]

	for (let i = 0; i < 4; i++) {
		if (filteredArray.length > 0) {
			let minVal = Math.min(...filteredArray);
		}

		//get minimum value from array

		if (resultASCIIarray.indexOf(minVal) === -1) {
			console.log("entering");
			resultASCIIarray.push(minVal); //push into resulting array
			//get index of it and splice = remove that value from the initial ascii array
			let index = spreadedS.indexOf(minVal);
			tempLastAppendedASCIICharacter = spreadedS.splice(index, 1);
			filteredArray = filteredArray.filter((val) => val !== minVal);
		}

		console.log(resultASCIIarray);
	}
};

sortString(s);
