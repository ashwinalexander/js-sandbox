//function statement
function greet(name) {
	console.log("hello " + name);
}
greet("ashwin");

//using a function expression
var greetFunc = function (name) {
	console.log("hello " + name);
};

greetFunc("ashwin again");

//immediately invoked function expression
var blah = (function () {
	console.log("hello we have no name guys");
})();

//another immediately invoked function expression
var newBlah = (function (name) {
	console.log("hello we really have no name " + name);
})("or do we");

//another immediately invoked function expression
var finalBlah = ((name) => {
	return console.log("this is my name " + name);
})("what");

(function (name) {
	var greeting = "hello";
	console.log(greeting + " " + name);
})("iife");

//iife

(function (name) {
	console.log(name);
})("blah");

(function (name) {
	console.log("bye" + " " + name);
})("fish");

(function () {
	if (3 != 3) {
		console.log("hello 3");
	} else {
		console.log("Fish");
	}
})();
