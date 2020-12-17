var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d));

function Person(name) {
	this.name = name;
}
