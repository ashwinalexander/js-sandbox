//lesson 35: objects are functions

//eg: 1
greet();

function greet() {
	console.log("hi");
}

//eg: 2
var anonymousGreet = function () {
	console.log("hi");
};

anonymousGreet();

//eg: 3
function log(a) {
	a();
}

log(function () {
	console.log("hi");
});
