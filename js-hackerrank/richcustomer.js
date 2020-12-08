//You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
//A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

let accounts = [
	[1, 2, 3],
	[3, 2, 1],
	[3, 10, 5],
];

let maximumWealth = function (accounts) {
	//sum of each of the customers bank accounts
	// let sumOfAccounts = [];

	// for (let i = 0; i < accounts.length; i++) {
	// 	sumOfAccounts.push(accounts[i].reduce((val, acc) => acc + val));
	// }

	return Math.max(
		...accounts.map((val) => val.reduce((val2, acc) => acc + val2))
	);
};

console.log(maximumWealth(accounts));
