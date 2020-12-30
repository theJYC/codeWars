// toBinary.js (didn't get this the first time)

/*

Given a non-negative integer n, write a function to_binary/ToBinary
which returns that number in a binary format.

Example:

toBinary(1)  returns 1
toBinary(5)  returns 101
toBinary(11) returns 1011

*/

toBinary = (n) => {
    return parseInt(n.toString(2));
}

console.log(toBinary(5))
