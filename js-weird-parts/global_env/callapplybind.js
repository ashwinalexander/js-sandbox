// all function objects get access to bind, call and apply
var person = {
	firstname: "john",
	lastname: "doe",
	getFullName: function () {
		var fullname = this.firstname + " " + this.lastname;
		return fullname;
	},
};

var logName = function (lang1, lang2) {
	console.log("logged: " + this.getFullName());
	console.log("-------------");
};

logName("En", "Fr");

// //creates a copy of whatever function you are calling it on and returns that
var logPersonName = logName.bind(person);

logPersonName("en", "fr");

// //call just executes it - but lets you decide what this keyword is and also passes variables
logName.call(person, "en", "es");

// //exactly same as call - but args take an array
logName.apply(person, ["en", "es"]);

// //function borrowing
var person2 = {
	firstname: "Jane",
	lastname: "Doe",
};

console.log(person.getFullName.apply(person2));

//function currying = (bind creates a copy of a function)
function multiply(a, b) {
	return a * b;
}
