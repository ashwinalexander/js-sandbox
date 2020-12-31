(function (global, $) {
	var Greetr = function (firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	};

	var supportedLangs = ["en", "es"];

	var greetings = {
		en: "Hello",
		es: "Hola",
	};

	var logMessages = {
		en: "Logged in",
		es: "Inicio sesion",
	};

	var formalGreetings = {
		en: "Greetings",
		es: "Saludos",
	};

	Greetr.init = function (firstName, lastName, language) {
		var self = this;

		self.firstName = firstName || "";
		self.lastName = lastName || "";
		self.language = language || "en";

		self.validate();
	};

	Greetr.prototype = {
		HTMLGreeting: function (selector, formal) {
			if (!$) {
				throw "install jQuery";
			}

			if (!selector) {
				throw "invalid selector";
			}

			var msg;
			formal ? (msg = this.formalGreeting()) : (msg = this.greeting());
			$(selector).html(msg);
			return this;
		},

		fullName: function () {
			return this.firstName + " " + this.lastName;
		},
		validate: function () {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "invalid language";
			}
		},
		greeting: function () {
			return greetings[this.language] + " " + this.firstName + "!";
		},

		formalGreeting: function () {
			console.log("e");
			return formalGreetings[this.language] + " " + this.fullName();
		},
		greet: function (formal) {
			var msg;

			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			if (console) {
				console.log(msg);
			}

			//"this" refers to the calling object at execution time
			//makes the method chainable
			return this;
		},
		log: function () {
			if (console) {
				console.log(logMessages[this.language] + ":" + this.fullName());
			}

			return this;
		},

		setLang: function (lang) {
			this.language = lang;

			this.validate();

			return this;
		},
	};
	Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr;
})(window, jQuery);
