// array.js

/*
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
*/

// I: any given integer (e.g. 5)
// O: an array of all values upto --and including-- the integer (e.g. [0,1,2,3,4,5])

arr = (int) => {
    array = [];
    for (i = 0; i <= int; i++) {
        array += i;
    }
    return array.split(""); //if the array is a negative number, print (0)
}

console.log(arr(98))
