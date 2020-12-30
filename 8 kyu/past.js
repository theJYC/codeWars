// past.js

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

past = (h, m, s) => {
    if ((0 <= h <= 23) && (0 <= m <= 59) && (0 <= s <= 59)) {
        return (h * 1000 * 60 * 60) + (m * 1000 * 60) + (s * 1000);
    }
    return "invalid input"
}

console.log(past(-1,2,4)) //outputs: -346000 when negative args should throw "invalid input"
// ^question is, if there is more than one argument, how to reference the args individually in the function?

