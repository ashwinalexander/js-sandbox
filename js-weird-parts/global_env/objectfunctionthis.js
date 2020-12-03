//udemy 37: Objects, functions, this

var house = "blah";
function a() {
	// console.log(this);
	this.newvariable = "hello";
	this.house = "not blah";
}

var b = function () {
	// console.log(this);
};

a();

// console.log(newvariable);

b();

var c = {
	name: "the c object",
	log: function () {
		var self = this;
		self.name = "updated c object";
		// console.log(this);

		var setname = function (newname) {
			this.name = newname;
			// console.log("reached here");
		};

		setname("updated one more time");
		// console.log(this);
	},
};

c.log();

var mercedes = {
	name: "e63 amg",
	log: function () {
		var self = this;
		self.name = "e63 amg 2019";
		console.log(self.name);

		setname = function (names) {
			self.name = names;
		};

		setname("e63 amg wagon");

		console.log(self.name);
	},
};

mercedes.log();
