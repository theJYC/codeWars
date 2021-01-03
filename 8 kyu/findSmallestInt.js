// findSmallestInt.js

/*

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/


//I: array [] of integers
//O: smallest integer within the array
//sort the array using array.sort()
//pick the zeroth index of the array and return it



findSmallestInt = (args) => {
    let sorted = args.sort((a, b) => a - b);
    return sorted[0];
}

console.log(findSmallestInt([2,-34,4]));
