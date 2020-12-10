//function constructor: A normal function used to construct objects
//this variable points to a new empty object  = and that object is returned from the function automatically

function Person(firstname, lastname) {
	console.log(this);
	this.firstname = firstname;
	this.lastname = lastname;
	console.log("This function is being invoked");
}

Person.prototype.getFullName = function () {
	return this.firstname + "  " + this.lastname;
};

// putting the new operator in front of a function object sets the this to a brand new object
//if you don't return anything, it returns that brand new object
var john = new Person("john", "doe");
console.log(john);
// var jane = new Person("jane", "doe");
// console.log(jane);

console.log(john.__proto__);
