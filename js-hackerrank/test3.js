let asciiArray = [97, 98, 99];

let asciiConverter = function (asciiArray) {
	return asciiArray
		.map((val) => String.fromCharCode(val))
		.reduce((finalResult, val) => finalResult + val);
};

console.log(asciiConverter(asciiArray));
