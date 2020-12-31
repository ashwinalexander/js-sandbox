//https://leetcode.com/problems/unique-morse-code-words/submissions/

/** * @param {string[]} words
 * @return {number}
 */

//let words = ["gin", "zen", "gig", "msg"];
// let words = ["rwjje", "aittjje", "auyyn", "lqtktn", "lmjwn"];
let words = ["noilq", "kzlq", "ydreq", "ybxk", "kzlq"];

//1. generate the morse code transformation of each word - translate + concatenate
//2. push each transformation into an array
//3. compare each element with the others and find how many unique "transformations" there are

var uniqueMorseRepresentations = function (words) {
	let morseWords = [];
	let morseCodeMap = {
		a: ".-",
		b: "-...",
		c: "-.-.",
		d: "-..",
		e: ".",
		f: "..-.",
		g: "--.",
		h: "....",
		i: "..",
		j: ".---",
		k: "-.-",
		l: ".-..",
		m: "--",
		n: "-.",
		o: "---",
		p: ".--.",
		q: "--.-",
		r: ".-.",
		s: "...",
		t: "-",
		u: "..-",
		v: "...-",
		w: ".--",
		x: "-..-",
		y: "-.--",
		z: "--..",
	};

	for (let i = 0; i < words.length; i++) {
		// g,i,n
		let tempArray = [...words[i]];
		let concatenatedMorseWord = "";

		for (let j = 0; j < tempArray.length; j++) {
			concatenatedMorseWord += morseCodeMap[tempArray[j]];
		}

		morseWords.push(concatenatedMorseWord);
	}

	let uniqueValues = [];

	for (let k = 0; k < morseWords.length; k++) {
		if (uniqueValues.indexOf(morseWords[k]) === -1) {
			uniqueValues.push(morseWords[k]);
		}
	}

	return uniqueValues.length;
};

uniqueMorseRepresentations(words);
