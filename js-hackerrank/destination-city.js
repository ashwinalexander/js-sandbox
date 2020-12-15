//https://leetcode.com/problems/destination-city/
/**
 * @param {string[][]} paths
 * @return {string}
 */

let paths = [
	["London", "New York"],
	["New York", "Lima"],
	["Lima", "Sao Paulo"],
];

//loop through paths
//extract the destination ([1])
//is the destination also an outgoing city?
//if no, then return destination[i]
//if yes, then continue the loop

let destCity = function (paths) {
	let sourceCities = paths.map((val) => val[0]);
	let destinationCities = paths.map((val) => val[1]);
	//option 1
	for (let i = 0; i < destinationCities.length; i++) {
		//ny, lima, sp
		let output = sourceCities.filter((val) => val === destinationCities[i]);
		if (output.length === 0) {
			return destinationCities[i];
		}
	}

	//option 2
	// for (let i = 0; i < paths.length; i++) {
	// 	//ny, lima, sp

	// 	console.log(paths[i][1] + " " + sourceCities.indexOf(paths[i][1]));
	// 	if (sourceCities.indexOf(paths[i][1]) === -1) {
	// 		return paths[i][1];
	// 	}
	// }
};
console.log(destCity(paths));
