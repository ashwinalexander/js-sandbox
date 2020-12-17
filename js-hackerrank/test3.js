var vlah = ["first", "second", "third"];

for (var prop in vlah) {
	console.log(prop);
}

var obj = {
	1: "first",
	2: "second",
	3: "third",
};

for (var prop in obj) {
	console.log(prop + ":" + obj[prop]);
}
