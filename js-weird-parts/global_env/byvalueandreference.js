//36. by value and by reference

//by value (<<primitives)
var a = 3;
var b;

b = a;
a = 2;

// console.log(a);
// console.log(b);

//by reference (<<object)
var c = { greeting: "Hi" };
var d;

d = c;
c.greeting = "hello";

// console.log(c);
// console.log(d);

//by reference (<<even as params)
function changeGreeting(obj) {
	obj.greeting = "hola";
	return obj;
}

let e = changeGreeting(d);
console.log(c);
console.log(d);
console.log(e);
