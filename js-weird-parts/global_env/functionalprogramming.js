var arr1 = [1, 2, 3, 4, 5];
var arr2 = [];

for (let i = 0; i < arr1.length; i++) {
	arr2.push(arr1[i] * 2);
}

// console.log(arr2);

function mapForEach(arr, fn) {
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		arr2.push(fn(arr[i]));
	}
	return arr2;
}

let arr3 = mapForEach(arr1, function (item) {
	return item > 3;
});

let checkForLimit = function (limit, item) {
	return item > limit;
};

let checkForLimitSimp = function (limit) {
	return function (limit, item) {
		return item > limit;
	}.bind(this, limit);
};

let arr4 = mapForEach(arr1, checkForLimit.bind(this, 1));
console.log(arr4);

let arr5 = mapForEach(arr1, checkForLimitSimp(1));
console.log(arr5);
