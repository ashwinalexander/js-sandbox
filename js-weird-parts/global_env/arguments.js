function greet(first, last, language) {
	language = language && "es";
	console.log(first);
	console.log(last);
	console.log(language);
	console.log(arguments);
	console.log("----");
}

// greet();
// greet("first");
// greet("first", "second");
// greet("first", "second", "en");

function newGreet(...args) {
	console.log(args[1]);
}

newGreet("hello");
newGreet("hello", "again");
newGreet("hello", "again", "hope");
