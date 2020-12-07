function multiply(a, b) {
	return a * b;
}

var multiplyByTwo = multiply.bind(this, 2, 4);
var multiplyByThree = multiply.bind(this, 3, 4);

console.log(multiplyByTwo(300));
console.log(multiplyByThree(30));

// var city = {
// 	name: "Toronto",
// 	population: 500000,
// 	province: "Ontario",
// 	getProvinceName: function () {
// 		return this.name + " is based in " + this.province;
// 	},
// };

// var logCity = function (mayorName, rivers) {
// 	console.log(mayorName + "   " + rivers);
// 	console.log(this.getProvinceName());
// };

// //creates a bound function with the same function body but the this object of the bound object is what is passed in
// var logCityNew = logCity.bind(city);

// //logCityNew("john tory", "humber and don");
// //logCity.call(city, "tory", "humber");
// logCity.apply(city, ["tory", "humber"]);

// var newcity = {
// 	name: "Montreal",
// 	province: "Quebec",
// };

// console.log(city.getProvinceName.apply(newcity));
