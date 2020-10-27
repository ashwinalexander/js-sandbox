//https://leetcode.com/problems/jewels-and-stones/
// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

//Input: J = "aA", S = "aAAbbbb"
//Output: 3

let J = "aA";
let S = "aAAbbbb";

//input = jewels and stones
//counter = 0
//1. let's spread the jewels into an array and spread the stones into another array
//2. for each jewel in J, find the occurences of it in the stones array - and increment the counter by that number
//3. return the counter
// output = number of jewels within the stones S

let numJewelsInStones = (J, S) => {
	let jewels = [...J];
	let stones = [...S];
	let counter = 0; //count of jewels

	//a, A
	for (let i = 0; i < jewels.length; i++) {
		let blah = stones.filter((val) => val === jewels[i]).length;
		counter = counter + blah;
	}
	console.log(counter);
	return counter;
};

numJewelsInStones(J, S);
