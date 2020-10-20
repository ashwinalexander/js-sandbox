// //Write a function to find the longest common prefix string amongst an array of strings.

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  let brokenStrings = []; //strings all spread up
  let prefix = "";

  strs.map((val) => brokenStrings.push([...val]));
  //f,l,o,w,e,r
  //f,l.o.w
  //f,l,i,g,h,t

  let firstArr = brokenStrings[0];

  console.log(firstArr);

  return prefix;
};

let strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
