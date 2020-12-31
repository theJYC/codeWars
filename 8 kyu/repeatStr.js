// repeatStr.js

/*
Write a function called repeatStr,
which repeats the given string [src] exactly [count] times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

repeatStr = (count, src) => {
    let str = src;
    for (i = 1; i < count; i++) {
        str += src;
    }
    return str;
};

console.log(repeatStr(3, "Hello"))
