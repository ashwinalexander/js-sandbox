let num = [1, 2, 3, 4, 5];
let copy = [];
for (let i = 0; i < num.length; i++) {
	copy.push(num[i]); //by value
}

num[0] = 400;

console.log(copy);
