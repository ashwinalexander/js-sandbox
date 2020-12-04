function greet(firstname, lastname, language) {
	language = language || "En";

	if (language === "En") {
		console.log("hello" + " " + firstname + " " + lastname);
	}

	if (language === "Fr") {
		console.log("salut" + " " + firstname + " " + lastname);
	}
}

greet("ashwin", "alexander");
greet("ashwin", "alexander", "Fr");
