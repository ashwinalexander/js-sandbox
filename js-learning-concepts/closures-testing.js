// var jane = {
//   name: "jane",
//   dateOfBirth: "1969",
//   location: "delhi",
// };

// var peter = {
//   name: "peter",
//   dateOfBirth: "1975",
//   location: "toronto",
// };

// var Person = function (name, year, location) {
//   (this.name = name), (this.year = year), (this.location = location);
// };

// Person.prototype.calculateAge = function () {
//   return 2020 - this.year;
// };

// var paul = new Person("paul", "1984", "ottawa");

// console.log(paul.name);
// console.log(paul.calculateAge());
// function init() {
//   var blah = "blah";

//   let callBlah = function () {
//     console.log(blah);
//   };
//   return callBlah;
// }

// let myFunc = init();
// console.log(myFunc);

// function makeMultiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// console.log(makeMultiplier(5)(5));

// Example 1
// Only y is hoisted

x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
console.log(x + " " + y); // '1 undefined'
// This prints value of y as undefined as JavaScript only hoists declarations
var y = 2; // Declare and Initialize y

// Example 2
// No hoisting, but since initialization also causes declaration (if not already declared), variables are available.

a = "Cran"; // Initialize a
b = "berry"; // Initialize b

console.log(a + "" + b); // 'Cranberry'
