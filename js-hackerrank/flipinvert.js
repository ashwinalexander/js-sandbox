// https://leetcode.com/problems/flipping-an-image/

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

// /**
//  * @param {number[][]} A
//  * @return {number[][]}
//  */

//flip
//iterate through each array element, swap of each element (we may have to use a temp variable to do this)
//invert
//simple map function, if 1, then set to 0, and if 0, then set to 1.
//return the flipped + inverted array

let A = [
	[1, 1, 0],
	[1, 0, 1],
	[0, 0, 1],
];

let flipAndInvertImage = function (a) {
	//flip function ([1,1,0] => [0,1,1])
	let flip = function (initialArray) {
		let copyArray = [...initialArray];

		for (let i = 0; i < initialArray.length; i++) {
			copyArray[i] = initialArray[initialArray.length - i - 1];
		}
		return copyArray;
	};
	//invert function
	let invert = function (c) {
		return c === 0 ? 1 : 0;
	};

	let flippedArray = a.map((val) => flip(val));

	console.log("original");
	console.log(a);

	//invert
	console.log("flipped");
	console.log(flippedArray);

	let invertedArray = flippedArray.map((val) =>
		val.map((valToInvert) => invert(valToInvert))
	);
	console.log("flipped + inverted");
	console.log(invertedArray);
	return invertedArray;
};

flipAndInvertImage(A);
