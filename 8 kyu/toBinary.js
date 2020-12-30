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

/* explanation:

int.toString(2) basically converts any integer into a binary string.
(2) for binary, (8) for octal, (10) for decimal, (16) for hexadecimal.

then the parseInt will just convert the string formatted binary
back into an integer format.
*/
