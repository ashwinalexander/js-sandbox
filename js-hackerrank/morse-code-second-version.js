//https://leetcode.com/problems/unique-morse-code-words/submissions/
// STEPS:
// 1. Create an object to map alphabets to morse code
// 2. Create an empty array to hold UNIQUE translated words
// 3. Create a function to translate words into morse code
// 4. loop through each word, call the translator function, get translated word
// 5. PUSH the translated word into the array created in step 2 BUT ONLY IF it does not already exist there
// 6. return length of the array we created in step 2
let words = ["gin", "zen", "gig", "msg"];
let uniqueMorseRepresentations = function (words) {
	//array to hold the translated words
	let translatedArray = [];
	//object mapping alphabet to morse code
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

	//Input: word
	//Output: word translated into morsecode
	function morseCodeTranslator(word) {
		let letters = [...word]; //spread the word into its constituent letters
		let concatenatedTranslatedWord = "";
		for (let i = 0; i < letters.length; i++) {
			concatenatedTranslatedWord += morseCodeMap[letters[i]];
		}
		return concatenatedTranslatedWord;
	}

	//gin, zen. gig, msg
	//"..__","..__","..__..","..__.."
	for (let i = 0; i < words.length; i++) {
		//get each translated word
		let translatedWord = morseCodeTranslator(words[i]);

		//push the translated word into the array BUT ONLY IF it does not already exist in the array
		if (translatedArray.indexOf(translatedWord) === -1) {
			translatedArray.push(translatedWord);
		}
	}

	return translatedArray.length;
};
uniqueMorseRepresentations(words);
