var car = {
	model: "Escape",
	make: "Ford",
	year: 2010,
	getFullDescription: function () {
		return this.year + " " + this.model + " " + this.make;
	},
};

var porsche = {
	model: "911",
	make: "Porsche",
};

var ferrari = {
	model: "scaglietti",
	make: "ferrari",
	year: 2000,
};

porsche.__proto__ = car;
ferrari.__proto__ = car;

// console.log(porsche.getFullDescription());
//console.log(ferrari.getFullDescription());

for (var prop in ferrari) {
	if (ferrari.hasOwnProperty(prop)) {
		console.log(prop + ":" + ferrari[prop]);
	}
}

var jane = {
	address: "111 Main St",
	getFormalFullName: function () {
		return this.lastname + "," + this.firstname;
	},
};

var jim = {
	getFirstName: function () {
		return firstname;
	},
};
