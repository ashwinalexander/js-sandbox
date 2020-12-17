// var person = {
// 	firstname: "default",
// 	lastname: "Default",
// 	greet: function () {
// 		return "Hi" + this.firstname;
// 	},
// };

// var john = Object.create(person);
// john.firstname = "John";
// john.lastname = "Fun";
// console.log(john.greet());

// person.prototype.firstname = "dd";

// console.log(john.firstname);

function getMessageText() {
	return $("message").selector;
}
document.body.innerHTML = "<div id=“message”>The message</div>";
console.log(getMessageText());
