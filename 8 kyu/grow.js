//grow.js

/*
Given a non-empty array of integers,
return the result of multiplying the values together in order.

Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

grow = x => {
    let multiple = 1;
    for (i = 0; i < x.length; i++) {
        multiple *= x[i];
    }
    return multiple;
}

console.log(grow([1,2,3,4,5]))
