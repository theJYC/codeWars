// sumArray.js

/*
Sum all the numbers of the array (in F# and Haskell you get a list)
except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge,
even if there are more than one with the same value!)

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
*/

sumArray = array => {
    if (array == null || array.length <= 1) {
        return 0;
    }
    sum = 0;
    sortedArray = array.sort((a, b) => a -b); //the function inside the sort method is a compare function
    console.log(sortedArray);
    for (i = 1; i < array.length -1; i++){
        sum += sortedArray[i];
    }
    return sum;
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]))


/* key takeaway
when using the .sort() method in an array,
the elements are first converted into strings, then sorted based on ascending order.

this is problematic when the elements of an array are all integers,
since [1, 3, 10, 5, 6] will sort to [1, 10, 3, 5, 6].

therefore, a comparison function should be passed into the sort method parameter.

more on this: javascripttutorial.net/javascript-array-sort/                        */
