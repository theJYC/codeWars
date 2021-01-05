// invert.js

/*

Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/

//first attempt:
invert = array => array.map(x => x * -1);


//refactored:
invert = array => array.map(x => -x); // -x is an example of a unary operator.

console.log(invert([1,2,3,4]))
