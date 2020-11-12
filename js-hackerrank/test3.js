let strs = [
	["f", "l", "o", "w", "e", "r"],
	["f", "l", "o", "w"],
	["f", "l", "i", "g", "h", "t"],
];

let testFunction = function (strs) {
	//iterate through all the elements of the first array within the larger array
	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 1; j < strs.length; j++) {
			console.log(strs[0][i]); //f,l,o,w,e,r
		}
	}
};

testFunction(strs);
