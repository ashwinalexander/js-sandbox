function passMake(make) {
	return function (model) {
		return make + " " + model;
	};
}

let make = passMake("Ford");

let blah = make("Escape");

console.log(blah);
