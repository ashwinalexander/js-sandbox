//factory function: function that returns objects, functions

function makeGreeting(language) {
	return function (firstname, lastname) {
		if (language === "en") {
			console.log("hello" + " " + firstname + " " + lastname);
		}
		if (language === "fr") {
			console.log("salut" + " " + firstname + " " + lastname);
		}
	};
}

var makeGreetingEnglish = makeGreeting("en");
var makeGreetingFrench = makeGreeting("fr");

makeGreetingFrench("ashwin", "alexander");
makeGreetingEnglish("ashwin", "alexander");
makeGreetingFrench("ashwin", "alexander");
makeGreetingEnglish("ashwin", "alexander");
