// //https://leetcode.com/problems/baseball-game/

// You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

// At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

//     An integer x - Record a new score of x.
//     "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
//     "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
//     "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

// Return the sum of all the scores on the record.

let ops = ["5", "2", "C", "D", "+"];

var calPoints = function (ops) {
	let record = [];

	for (let i = 0; i < ops.length; i++) {
		switch (ops[i]) {
			case "C":
				record.pop();
				break;
			case "D":
				record.push(2 * parseInt(record[record.length - 1]));
				break;
			case "+":
				record.push(
					parseInt(record[record.length - 1]) +
						parseInt(record[record.length - 2])
				);
				break;
			default:
				record.push(parseInt(ops[i]));
				break;
		}
	}

	return record.reduce((accumulator, currentval) => accumulator + currentval);
};

console.log(calPoints(ops));
