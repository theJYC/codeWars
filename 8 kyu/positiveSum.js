// positiveSum.js (didn't get on first go. try again later!)

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

positiveSum = (arr) => {
    let sum = 0;
    if (arr === undefined || arr.length == 0) {
        return 0;
    }
    else {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                arr[i] = 0; // if element is a negative value, consider it as 0
            }
            else {
                sum += arr[i]; // if element is a positive value, add to (i.e. populate) the sum variable.
            }
        }

    }
    return sum; //return the newly populated sum variable
}

console.log(positiveSum([1,2,3]));

/*
notes: the initial struggle with this problem was that I was unfamiliar with how to play with an 'element' of an array.
up until now, i only had experience with playing with the 'index' of the array ==>  i,
instead of the element at that index of the array ==> arr[i].

when looping through array (named "arr" in this example) through regular for loop syntax,
refer to the element by calling it "arr[i]"!
*/
