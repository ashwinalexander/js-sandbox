var arr = [
	12,
	false,
	{ name: "ashwin", street: "923 bath" },
	function name(nam) {
		console.log("hello" + nam);
	},
	"hello",
];

// console.log(arr);

arr[3](arr[2].name);
