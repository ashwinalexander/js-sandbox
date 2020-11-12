// SHIFT 2D GRID
// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
// In one shift operation:
//     Element at grid[i][j] moves to grid[i][j + 1].
//     Element at grid[i][n - 1] moves to grid[i + 1][0].
//     Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

let grid = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let k = 2;

let shiftGrid = function (grid, k) {
	//this function will be called k times - shifts all elements one step to the right
	let shift = function (grid) {
		//1. first get the length of each array. We know n will at least have 1 array
		let n = grid[0].length;

		//2. next, break it up into one string
		let newArr = [];
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				newArr.push(grid[i][j]);
			}
		}

		//3. next pop and unshift to move the last to the first
		newArr.unshift(newArr.pop());
		console.log(newArr);

		//4 next convert it back into a grid
		grid = [];
		let tempArr = [];
		for (let i = 0; i < newArr.length; i++) {
			tempArr.push(newArr[i]);
			if (tempArr.length == n) {
				grid.push(tempArr);
				tempArr = [];
			}
		}

		return grid;
	};

	//loop through k times
	for (let n = 0; n < k; n++) {
		grid = shift(grid);
	}

	return grid;
};

shiftGrid(grid, k);
